import "./App.css";
import { useState, useEffect } from "react";
import Searchbox from "./Components/Searchbox";
import DropMenu from "./Components/DropMenu";
import DataType from "./Components/DataType";
import MapComponent from "./Components/MapComponent";
import CountrySummary from "./Components/CountrySummary";
import CountriesList from "./Components/CountriesList";
import "leaflet/dist/leaflet.css";
import {filterTypeData} from "./Components/util";

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
  const [historicalData, setHistoricalData] = useState();

  // On pageload, fetch yesterday's data and set in App state
  useEffect(() => {
    const fetchData = async() => {
      const fetchedDataCountries = await fetch("https://disease.sh/v3/covid-19/countries?yesterday=true")
      .then(response => response.json());
      const fetchedDataGlobal = await fetch("https://disease.sh/v3/covid-19/all?yesterday=true")
      .then(response => response.json());
      const fetchedHistoricalDataGlobal = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then(response => response.json());

      setCountriesData(fetchedDataCountries);
      setWorldData(fetchedDataGlobal);
      setHistoricalData(fetchedHistoricalDataGlobal);
      setCountriesNames(fetchedDataCountries.map(country => country.country));
      setCountryData(fetchedDataGlobal);
      setTypeData(filterTypeData(fetchedDataCountries))
    }
    fetchData();
  }, []);

  //country change handler
  const onSelectedCountryChange = (selected) => {
    if (selected === "Worldwide") {
      setCenter({ lat: 15, lng: 0 });
      setZoom(2);
      setCountryData(worldData);
      setSelectedCountry("Worldwide");
    } else {
      let countryStats = countriesData.find(country => country.country === selected);
      setCountryData(countryStats);
      setCenter([countryStats.countryInfo.lat, countryStats.countryInfo.long]);
      setZoom(4);
      setSelectedCountry(countryStats.country);
    }
  };

  //function to handle datatype change from dropdown menu
  const onSelectedTypeChange = (selected) => {
    setTypeData(filterTypeData(countriesData, selected));
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
