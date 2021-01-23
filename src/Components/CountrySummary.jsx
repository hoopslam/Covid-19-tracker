import React from 'react'
import "./CountrySummary.css";

function CountrySummary({countryData}) {
    return (
        <div className="country-summary-card">
            <div className="country-name">
                <h2>{countryData.country ? countryData.country : "Worldwide Summary"}</h2>
                {countryData.countryInfo ? <img src={countryData.countryInfo.flag} alt="flag" style={{height: "70px", width: "auto"}}/>: null}
            </div>
            <div className="stat-item">Cases today: {countryData.todayCases}</div>
            <div className="stat-item">Cases total: {countryData.cases}</div>
            <div className="stat-item">Deaths today: {countryData.todayDeaths}</div>
            <div className="stat-item">Deaths total: {countryData.deaths}</div>
            <div className="stat-item">Recovered today: {countryData.todayRecovered}</div>
            <div className="stat-item">Recovered total: {countryData.recovered}</div>
            <div className="stat-item">Currently active cases: {countryData.active}</div>
            <div className="stat-item">Currently critical cases: {countryData.critical}</div>
            <div className="stat-item">Cases per Million: {countryData.casesPerOneMillion}</div>
            <div className="stat-item">Deaths per Million: {countryData.deathsPerOneMillion}</div>
            <div className="stat-item">Cases as percent of pop: {Math.round(countryData.cases / countryData.population * 100)}%</div>

        </div>
    )
}

export default CountrySummary
