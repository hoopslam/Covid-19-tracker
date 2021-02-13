import React , {useState} from 'react';

function SearchBar({ countryChangeHandler, countryNames }) {
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleKeyUp = (e) => {
        if (e.key === "Enter") { 
            e.target.value ? filteredCountries && countryChangeHandler(filteredCountries[0]) && setFilteredCountries([]) : //set Selected country to whatever was at the top of the filtered search result
            countryChangeHandler("Worldwide")
        } else {
            setFilteredCountries(
            countryNames.filter(country => {
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
                    <div className="menuItem" key={i} onClick={() => countryChangeHandler(country)}>{country}</div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar
