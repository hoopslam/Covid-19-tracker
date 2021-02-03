import "./App.css";
import { useState, useEffect } from "react";
import Searchbox from "./Components/Searchbox";
import DropMenu from "./Components/DropMenu";
import DataType from "./Components/DataType";
import MapComponent from "./Components/MapComponent";
import CountrySummary from "./Components/CountrySummary";
import CountriesList from "./Components/CountriesList";
import "leaflet/dist/leaflet.css";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [worldData, setWorldData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [countryData, setCountryData] = useState();
  const [countriesNames, setCountriesNames] = useState([]);
  const [selectedTypeMenu, setSelectedTypeMenu] = useState(["New Cases"]);
  const [typeData, setTypeData] = useState([]);
  const [center, setCenter] = useState({ lat: 15, lng: 0 });
  const [zoom, setZoom] = useState(2);

  // On pageload, fetch yesterday's data and set in state
  useEffect(() => {
    async function fetchData() {
      const countriesResponse = await fetch(
        "https://disease.sh/v3/covid-19/countries?yesterday=true"
      );
      const countriesJson = await countriesResponse.json();
      const worldResponse = await fetch(
        "https://disease.sh/v3/covid-19/all?yesterday=true"
      );
      const worldJson = await worldResponse.json();

      setCountriesData(countriesJson);
      setWorldData(worldJson);
      setCountriesNames(countriesJson.map((country) => country.country));
      setCountryData(() => worldJson);
      setTypeData(
        countriesJson
          .map((country) => ({
            country: country.country,
            iso3: country.countryInfo.iso3,
            iso2: country.countryInfo.iso2,
            id: country.countryInfo._id,
            cat: "todayCases",
            typeValue: country.todayCases,
            type: "New Cases",
            lat: country.countryInfo.lat,
            lng: country.countryInfo.long,
          }))
          .sort((a, b) => b.typeValue - a.typeValue)
      );
    }
    fetchData();
    console.log("fetching");
  }, []);

  //function to handle country change from dropdown menu
  const onSelectedCountryChange = (selected) => {
    if (selected === "Worldwide") {
      setCenter({ lat: 15, lng: 0 });
      setZoom(2);
      setCountryData(worldData);
      setSelectedCountry("Worldwide");
    } else {
      let countryStats = countriesData.find((country) => {
        return country.country === selected;
      });
      setCountryData(countryStats);
      setCenter([countryStats.countryInfo.lat, countryStats.countryInfo.long]);
      setZoom(4);
      setSelectedCountry(countryStats.country);
    }
  };

  //function to handle datatype change from dropdown menu
  const onSelectedTypeChange = (selected) => {
    console.log(selected)
    setTypeData(
      countriesData
        .map((country) => ({
          country: country.country,
          iso3: country.countryInfo.iso3,
          iso2: country.countryInfo.iso2,
          id: country.countryInfo._id,
          cat: selected.target.dataset.value,
          typeValue: country[selected.target.dataset.value],
          type: selected.target.innerText,
          lat: country.countryInfo.lat,
          lng: country.countryInfo.long,
          flag: country.countryInfo.flag,
        }))
        .sort((a, b) => b.typeValue - a.typeValue)
    );
    setSelectedTypeMenu(selected.target.innerText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App_title">Covid-19 Tracker</h1>
        <div className="map-container">
          <MapComponent center={center} zoom={zoom} typeData={typeData} />
        </div>
      </header>
      <nav className="App-nav">
        <Searchbox
          countriesNames={countriesNames}
          selectChange={onSelectedCountryChange}
        />
        <div className="menu-container">
          <DropMenu
            countryNames={countriesNames}
            selectedCountry={selectedCountry}
            selectChange={onSelectedCountryChange}
          />
          <DataType
            selectedType={selectedTypeMenu}
            selectedTypeChange={onSelectedTypeChange}
          />
        </div>
      </nav>

      <section className="details">
        {countryData ? (
          <CountrySummary countryData={countryData} />
        ) : (
          <h1>Loading</h1>
        )}
        <CountriesList
          typeData={typeData}
          selectChange={onSelectedCountryChange}
        />
      </section>
    </div>
  );
}

export default App;
