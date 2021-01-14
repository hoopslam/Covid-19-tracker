import React from 'react'
import "./Searchbox.css"

function Searchbox({searchChange, selectChange, filteredCountries }) {
    return (
        <div className="search-dropdown">
            <input 
                type="search" 
                placeholder="Search Country" 
                onKeyUp={searchChange}
            />
            <div className="search-dropdown-content">
                {filteredCountries.length > 0 && filteredCountries.length < 221 ? filteredCountries.map((country, i) => (
                    <div className="menuItem" key={i} onClick={selectChange}>{country}</div>
                )): null}
            </div>
        </div>
    )
}

export default Searchbox
