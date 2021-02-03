import React from "react";
import numeral from "numeral";

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
      <div className="stat-item">New Cases <span>{numeral(countryData.todayCases).format("0,0")}</span></div>
      <div className="stat-item">Total Cases<span>{numeral(countryData.cases).format("0,0")}</span></div>
      <div className="stat-item">Deaths Today <span>{numeral(countryData.todayDeaths).format("0,0")}</span></div>
      <div className="stat-item">Total Deaths <span>{numeral(countryData.deaths).format("0,0")}</span></div>
      <div className="stat-item">
        Recovered Today <span>{numeral(countryData.todayRecovered).format("0,0")}</span>
      </div>
      <div className="stat-item">Total Recovered<span>{numeral(countryData.recovered).format("0,0")}</span></div>
      <div className="stat-item">
        Active Cases <span>{numeral(countryData.active).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Critical Cases <span>{numeral(countryData.critical).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Cases per Million <span>{numeral(countryData.casesPerOneMillion).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Deaths per Million <span>{numeral(countryData.deathsPerOneMillion).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Population <span>{numeral(countryData.population).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Infection Rate<span>{Math.round((countryData.cases / countryData.population) * 100)}%</span>
      </div>
      <div className="stat-item">
        Recovery Rate<span>{Math.round((countryData.recovered / countryData.cases) * 100)}%</span>
      </div>
      <div className="stat-item">
        Death Rate<span>{Math.round((countryData.deaths / countryData.cases) * 100)}%</span>
      </div>
    </div>
  );
}

export default CountrySummary;
