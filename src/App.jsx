import './App.css';
import { useState, useEffect } from "react";
import Searchbox from "./Components/Searchbox";
import DropMenu from "./Components/DropMenu";

function App() {

  const [countriesData, setCountriesData] = useState([]);
  const [worldData, setWorldData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [countriesNames, setCountriesNames] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  
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

  // }, [selectedCountry])

  const onSearchChange = (e) => {
    if (e.key === "Enter") {  //set Selected country to whatever was at the top of the filtered search result
      setSelectedCountry(filteredCountries[0])
    }
    setFilteredCountries(
      countriesNames.filter(country => {
        return country.toLowerCase().startsWith(e.target.value.toLowerCase())  //filter based on beginning letters
      })
    ) 
  }

  const onSelectedCountryChange = (selected) => {
    setSelectedCountry(selected.target.innerText)
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
          <DropMenu 
            countryNames={countriesNames} 
            selectedCountry={selectedCountry} 
            selectChange={onSelectedCountryChange}/>
        </nav>
      </header>
    </div>
  );
}

export default App;
