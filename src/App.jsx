import './App.css';
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
  const [selectedTypeMenu, setSelectedTypeMenu] = useState(["Cases today"]);
  const [selectedType, setSelectedType] = useState(["todayCases"]);
  const [center, setCenter] = useState({ lat: 15, lng: 0});
  const [zoom, setZoom] = useState(2);
  
  // On pageload, fetch yesterday's data and set in state
  useEffect(() => {
    async function fetchData() {
      const countriesResponse = await fetch("https://disease.sh/v3/covid-19/countries?yesterday=true");
      const countriesJson = await countriesResponse.json();
      const worldResponse = await fetch("https://disease.sh/v3/covid-19/all");
      const worldJson = await worldResponse.json();

      setCountriesData(countriesJson);
      setWorldData(worldJson);
      setCountriesNames(countriesJson.map(country => country.country));
    }
    fetchData();
  },[]);

  //function to handle country change from dropdown menu
  const onSelectedCountryChange = (selected) => {
    if(selected === "Worldwide"){
      setCenter({lat: 15, lng: 0})
      setZoom(2)
      setCountryData(worldData)
      setSelectedCountry("Worldwide")
    } else {
      let countryStats = countriesData.find(country => {
        return country.country === selected
      })
      setCountryData(countryStats)
      setCenter([countryStats.countryInfo.lat, countryStats.countryInfo.long])
      setZoom(4)
      setSelectedCountry(countryStats.country)
    }
  }

  //function to handle datatype change from dropdown menu
  const onSelectedTypeChange = (selected) => {
    setSelectedType(selected.target.dataset.value)
    setSelectedTypeMenu(selected.target.innerText)
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App_title">Covid-19 Tracker</h1>
        <nav className="App-nav">
          <Searchbox
            countriesNames={countriesNames}
            selectChange={onSelectedCountryChange}/>
          <div className="menu-container">
            <DropMenu 
              countryNames={countriesNames} 
              selectedCountry={selectedCountry} 
              selectChange={onSelectedCountryChange}/>
            <DataType
              selectedType={selectedTypeMenu}
              selectedTypeChange={onSelectedTypeChange} />
          </div>
        </nav>
      </header>

      <div className="map-container">
        <MapComponent center={center} zoom={zoom}/>
      </div>

      <section className="details">
        <CountrySummary countryData={countryData}/>
        <CountriesList selectedType={selectedType}/>
      </section>
    </div>
  );
}

export default App;
