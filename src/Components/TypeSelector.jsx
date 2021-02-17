import React from "react";
import { typeColors } from "./util";

function TypeSelector({ selectedDataType, typeChangeHandler }) {
	return (
		<div className='dropdown'>
			<button
				className='dropbtn'
				style={{ backgroundColor: typeColors[selectedDataType.dataType].color}}>
				{selectedDataType.text}
			</button>
			<div className='dropdown-content type'>
				<div className='menuItem' onClick={typeChangeHandler} data-value='active'>
					Active Cases
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='critical'>
					Critical Cases
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='todayCases'>
					Cases Today
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='cases'>
					Total Cases
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='todayDeaths'>
					Deaths Today
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='deaths'>
					Total Deaths
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='todayRecovered'>
					Recovered Today
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='recovered'>
					Total Recovered
				</div>
				<div
					className='menuItem'
					onClick={typeChangeHandler}
					data-value='casesPerOneMillion'>
					Cases per Million
				</div>
				<div
					className='menuItem'
					onClick={typeChangeHandler}
					data-value='deathsPerOneMillion'>
					Deaths per Million
				</div>
			</div>
		</div>
	);
}

export default TypeSelector;
