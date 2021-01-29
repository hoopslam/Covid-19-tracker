import React from "react";
import "./CountrySummary.css";

function CountrySummary({ countryData }) {
  return (
    <div className="country-summary-container">
      <div className="country-name">
        <h2>
          {countryData.country ? countryData.country : "Worldwide Summary"}
        </h2>
        {countryData.countryInfo ? (
          <img
            src={countryData.countryInfo.flag}
            alt="flag"
            style={{ height: "70px", width: "auto" }}
          />
        ) : null}
      </div>
      <div className="stat-item">New Cases <span>{countryData.todayCases}</span></div>
      <div className="stat-item">Cases Total <span>{countryData.cases}</span></div>
      <div className="stat-item">Deaths Today <span>{countryData.todayDeaths}</span></div>
      <div className="stat-item">Deaths Total <span>{countryData.deaths}</span></div>
      <div className="stat-item">
        Recovered Today <span>{countryData.todayRecovered}</span>
      </div>
      <div className="stat-item">Recovered Total <span>{countryData.recovered}</span></div>
      <div className="stat-item">
        Currently Active Cases <span>{countryData.active}</span>
      </div>
      <div className="stat-item">
        Currently Critical Cases <span>{countryData.critical}</span>
      </div>
      <div className="stat-item">
        Cases per Million <span>{countryData.casesPerOneMillion}</span>
      </div>
      <div className="stat-item">
        Deaths per Million <span>{countryData.deathsPerOneMillion}</span>
      </div>
      <div className="stat-item">
        Cases as Percent of Pop <span>{Math.round((countryData.cases / countryData.population) * 100)}%</span>
      </div>
    </div>
  );
}

export default CountrySummary;
