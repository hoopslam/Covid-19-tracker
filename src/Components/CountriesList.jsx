import React from "react";
import numeral from "numeral";

function CountriesList({ typeData, selectChange }) {
  return (
    <div className="CountriesList">
      <div className="list-container">
        {typeData.map((country) => (
          <div
            className="list-country-data button"
            onClick={() => selectChange(country.country)}
          >
            <div className="list-country-name">{country.country}</div>
            <div className="list-country-number">{numeral(country.type).format("0,0")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
