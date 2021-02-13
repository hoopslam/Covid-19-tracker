import React from 'react'

function CountrySelector({countryNames, countryChangeHandler, selectedCountry}) {
    return (
        <div className="dropdown">
            <button className="dropbtn">{selectedCountry? `${selectedCountry}`:"Select Country"}</button>
            <div className="dropdown-content">
                <div className="menuItem" onClick={() => countryChangeHandler("Worldwide")}>Worldwide</div>
                {countryNames.map((country, i) => (
                    <div className="menuItem" key={i} onClick={() => countryChangeHandler(country)}>{country}</div>
                ))}
            </div>
        </div>
    )
}

export default CountrySelector
