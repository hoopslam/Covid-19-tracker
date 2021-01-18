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
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedTypeMenu, setSelectedTypeMenu] = useState(["Cases today"]);
  const [selectedType, setSelectedType] = useState(["todayCases"]);
  const [center, setCenter] = useState({ lat: 15, lng: 0});
  const [zoom, setZoom] = useState(2);
  
  useEffect(() => {  // On pageload, fetch yesterday's data and set in state
    fetch("https://disease.sh/v3/covid-19/countries?yesterday=true")
      .then(response => response.json())
      .then(data => setCountriesData(data))
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => setWorldData(data))
  },[]);

  useEffect(() => {  // Once countriesData is fetched, set countriesNames with fresh data.
    setCountriesNames(countriesData.map(country => country.country));
  }, [countriesData])

  // useEffect(() => {  rerender ui whenever selected country changes
  useEffect(() => {
    if(!selectedCountry || selectedCountry === "Worldwide"){
      setCenter({lat: 15, lng: 0})
      setZoom(2)
      setCountryData(worldData)
    } else {
      let countryStats = countriesData.find(country => {
        return country.country === selectedCountry
      })
      setCountryData(countryStats)
      setCenter([countryStats.countryInfo.lat, countryStats.countryInfo.long])
      setZoom(4)
    }
  }, [selectedCountry])

  const onSearchChange = (e) => {
    if (e.key === "Enter") {  //set Selected country to whatever was at the top of the filtered search result
      setSelectedCountry(filteredCountries[0])
      setFilteredCountries([])  //reset filteredCountries after enter is pressed
    } else {
    setFilteredCountries(
      countriesNames.filter(country => {
        return country.toLowerCase().startsWith(e.target.value.toLowerCase())  //filter based on beginning letters
      })
    )} 
  }

  const onSelectedCountryChange = (selected) => {
    setSelectedCountry(selected.target.innerText)
  }

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
            searchChange={onSearchChange} 
            filteredCountries={filteredCountries}
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
        <CountrySummary />
        <CountriesList />
      </section>
    </div>
  );
}

export default App;
