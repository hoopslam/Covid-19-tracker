import React , {useState} from 'react';

function SearchBar({ countryChangeHandler, countryNames }) {
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyUp = (e) => {  // Used to handle "Enter" without a button
        if (e.key === "Enter") { 
            if(inputValue){
                countryChangeHandler(filteredCountries[0])
                setFilteredCountries([])
            } else {
                countryChangeHandler("Worldwide")
            }
            setInputValue("")
        } else {
            setFilteredCountries(
            countryNames.filter(country => {
              return country.toLowerCase().startsWith(e.target.value.toLowerCase())  //using .startsWith so that the filter matches based on starting letters
            })
            )
        }
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className="search-dropdown">
            <input
                type="search" 
                placeholder="Search Country" 
                onKeyUp={handleKeyUp}  //Used because onChange doesn't handle "Enter" key press without a button.  I don't want a button so I am using keyup
                onChange={handleChange}
                value={inputValue}
            />
            <div className="search-dropdown-content">
                {filteredCountries.length < 50 && filteredCountries.map((country, i) => (
                    <div className="menuItem" key={i} onClick={() => {
                        setInputValue("")
                        setFilteredCountries([])
                        countryChangeHandler(country)}}>{country}</div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar
