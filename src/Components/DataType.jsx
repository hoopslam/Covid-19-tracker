import React from 'react'
import "./DataType.css"

function DataType({selectedType, selectedTypeChange}) {
    return (
        <div className="dropdown">
            <button className="dropbtn">Select Data</button>
            <div className="dropdown-content">
                <div className="menuItem" onClick={selectedTypeChange} data-value="todayCases">Cases today</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="cases">Cases total</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="todayDeaths">Deaths today</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="deaths">Deaths total</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="todayRecovered">Recovered today</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="recovered">Recovered total</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="active">Currently Active Cases</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="critical">Currently Critical Cases</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="casesPerOneMillion">Cases per million</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="deathsPerOneMillion">Deaths per million</div>
                <div className="menuItem" onClick={selectedTypeChange} data-value="percentage">Cases as percent of pop</div>
            </div>
        </div>
    )
}

export default DataType
