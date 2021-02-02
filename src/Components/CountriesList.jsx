import React from "react";
import numeral from "numeral";

function CountriesList({ typeData, selectChange }) {
  return (
    <div className="CountriesList">
      <div className="list-container">
        {typeData.map((country) => (
          <div
            className="list-country-data"
            onClick={() => selectChange(country.country)}
          >
            <div className="button-left" style={{ width: "60px" }}>
              {country.iso3}
            </div>
            <div className="button-right" style={{ width: "100%" }}>
              <div
                className="list-bar"
                style={{
                  width: `${(country.type / typeData[0].type) * 100}%`,
                  height: "20px",
                  marginRight: "5px",
                }}
              ></div>
              <div className="list-number">
                {numeral(country.type).format("0,0")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
