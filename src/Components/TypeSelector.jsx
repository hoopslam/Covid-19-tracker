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
				<div className='menuItem' onClick={typeChangeHandler} data-value='cases'>
					Total Cases
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='deaths'>
					Total Deaths
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='recovered'>
					Total Recovered
				</div>
				<div className='menuItem' onClick={typeChangeHandler} data-value='tests'>
					Tests Administered
				</div>
				<div className="menuItem" onClick={typeChangeHandler} data-value='countriesVaccine'>
					Vaccines Administered
				</div>
			</div>
		</div>
	);
}

export default TypeSelector;
