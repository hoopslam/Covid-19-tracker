import React from 'react'

function CountrySummary({countryData, worldData}) {
    return (
        <div className="country-summary-card">
            <h2 className="name">{countryData.country ? countryData.country : "Worldwide Summary"}</h2>
            {
                countryData.countryInfo ? 
                    <img src={countryData.countryInfo.flag} alt="flag" />
                    : null
            }
        </div>
    )
}

export default CountrySummary
