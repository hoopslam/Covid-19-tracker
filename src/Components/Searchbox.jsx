import React , {useState} from 'react';

function Searchbox({ selectChange, countriesNames }) {
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {  //set Selected country to whatever was at the top of the filtered search result
            e.target.value ? filteredCountries && selectChange(filteredCountries[0]) && setFilteredCountries([]) :
            selectChange("Worldwide")
        } else {
            setFilteredCountries(
            countriesNames.filter(country => {
              return country.toLowerCase().startsWith(e.target.value.toLowerCase())  //using .startsWith so that the filter matches based on starting letters
            })
            )
        }
    }
    return (
        <div className="search-dropdown">
            <input 
                type="search" 
                placeholder="Search Country" 
                onKeyUp={handleKeyUp}
            />
            <div className="search-dropdown-content">
                {filteredCountries.length < 50 && filteredCountries.map((country, i) => (
                    <div className="menuItem" key={i} onClick={() => selectChange(country)}>{country}</div>
                ))}
            </div>
        </div>
    )
}

export default Searchbox
