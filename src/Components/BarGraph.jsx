import React from "react";
import numeral from "numeral";
import { typeColors } from "./util";

function CountriesList({ selectedDataType, selectedDataTypeData, countryChangeHandler }) {
	let sortedData = selectedDataTypeData.sort((a, b) => b.typeValue - a.typeValue);
	return (
		<div className='CountriesList'>
			<div className='list-container'>
				<h2 className='type'>{selectedDataType}</h2>
				{sortedData.map(
					(country) =>
						country.id && (
							<div
								className='list-country-data'
								onClick={() => countryChangeHandler(country.country)}
								key={country.id}>
								<div className='button-left' style={{ width: "70px" }}>
									{country.iso3}
								</div>
								<div
									className='button-right'
									style={{ width: "100%" }}
									key={country.typeValue}>
									<div
										className='list-bar'
										style={{
											width: `${
												(country.typeValue /
													sortedData[0].typeValue) *
												100
											}%`,
											height: "20px",
											marginRight: "5px",
											backgroundColor: `${typeColors[country.cat].color}`,
										}}></div>
									<div className='list-number'>
										{numeral(country.typeValue).format("0,0")}
									</div>
								</div>
							</div>
						)
				)}
			</div>
		</div>
	);
}

export default CountriesList;
