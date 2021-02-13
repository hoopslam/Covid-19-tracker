import React from "react";
import numeral from "numeral";

function CountrySummary({ selectedCountryInfo }) {
  return (
    <div className="country-summary-container">
      <div className="country-name">
        <h2>
          {selectedCountryInfo.country ? selectedCountryInfo.country : "Worldwide Summary"}
        </h2>
        {selectedCountryInfo.countryInfo.flag ? (
          <img
            src={selectedCountryInfo.countryInfo.flag}
            alt="flag"
            style={{ height: "70px", width: "auto" }}
          />
        ) : null}
      </div>
      <div className="stat-item">New Cases <span>{numeral(selectedCountryInfo.todayCases).format("0,0")}</span></div>
      <div className="stat-item">Total Cases<span>{numeral(selectedCountryInfo.cases).format("0,0")}</span></div>
      <div className="stat-item">Deaths Today <span>{numeral(selectedCountryInfo.todayDeaths).format("0,0")}</span></div>
      <div className="stat-item">Total Deaths <span>{numeral(selectedCountryInfo.deaths).format("0,0")}</span></div>
      <div className="stat-item">
        Recovered Today <span>{numeral(selectedCountryInfo.todayRecovered).format("0,0")}</span>
      </div>
      <div className="stat-item">Total Recovered<span>{numeral(selectedCountryInfo.recovered).format("0,0")}</span></div>
      <div className="stat-item">
        Active Cases <span>{numeral(selectedCountryInfo.active).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Critical Cases <span>{numeral(selectedCountryInfo.critical).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Cases per Million <span>{numeral(selectedCountryInfo.casesPerOneMillion).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Deaths per Million <span>{numeral(selectedCountryInfo.deathsPerOneMillion).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Population <span>{numeral(selectedCountryInfo.population).format("0,0")}</span>
      </div>
      <div className="stat-item">
        Infection Rate<span>{Math.round((selectedCountryInfo.cases / selectedCountryInfo.population) * 100)}%</span>
      </div>
      <div className="stat-item">
        Recovery Rate<span>{Math.round((selectedCountryInfo.recovered / selectedCountryInfo.cases) * 100)}%</span>
      </div>
      <div className="stat-item">
        Death Rate<span>{Math.round((selectedCountryInfo.deaths / selectedCountryInfo.cases) * 100)}%</span>
      </div>
    </div>
  );
}

export default CountrySummary;
