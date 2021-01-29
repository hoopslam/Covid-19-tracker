import React from "react";
import "./DropMenu.css";

function DataType({ selectedType, selectedTypeChange }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedType}</button>
      <div className="dropdown-content type">
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="todayCases"
        >
          New Cases
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="cases"
        >
          Total Cases
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="todayDeaths"
        >
          Deaths Today
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="deaths"
        >
          Total Deaths
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="todayRecovered"
        >
          Recovered Today
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="recovered"
        >
          Total Recovered
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="active"
        >
          Currently Active Cases
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="critical"
        >
          Currently Critical Cases
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="casesPerOneMillion"
        >
          Cases per Million
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="deathsPerOneMillion"
        >
          Deaths per Million
        </div>
        <div
          className="menuItem"
          onClick={selectedTypeChange}
          data-value="percentage"
        >
          Cases as % of Pop
        </div>
      </div>
    </div>
  );
}

export default DataType;
