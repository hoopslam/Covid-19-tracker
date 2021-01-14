import React from 'react'
import "./DropMenu.css"

function DropMenu({countryNames, selectedCountry, selectChange}) {
    return (
        <div className="dropdown">
            <button className="dropbtn">{selectedCountry? `${selectedCountry}`:"Select Country"}</button>
            <div className="dropdown-content">
                <div className="menuItem" onClick={selectChange}>Worldwide</div>
                {countryNames.map((country, i) => (
                    <div className="menuItem" key={i} onClick={selectChange}>{country}</div>
                ))}
            </div>
        </div>
    )
}

export default DropMenu
