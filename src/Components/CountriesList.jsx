import React from 'react'
import './CountriesList.css'

function CountriesList({typeData, selectedTypeMenu}) {

    return (
        <div>
            <h1>{selectedTypeMenu}</h1>
            {typeData.map((country, i) => (
                <div className="list-country" key={i}>{country.country}: {country.type}</div>
                ))
            }
        </div>
    )
}

export default CountriesList