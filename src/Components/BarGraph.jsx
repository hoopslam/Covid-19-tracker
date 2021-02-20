import React from "react";
import numeral from "numeral";
import { typeColors } from "./util";
import TypeSelector from "./TypeSelector";

function CountriesList({
	selectedDataType,
	selectedDataTypeData,
	countryChangeHandler,
	worldData,
	typeChangeHandler,
}) {
	let sortedData = selectedDataTypeData.sort((a, b) => b.typeValue - a.typeValue).slice(0, 40);

	return (
		<div className='CountriesList'>
			<div className='list-container'>
				<div className='list-country-button'>
					<TypeSelector
						typeChangeHandler={typeChangeHandler}
						selectedDataType={selectedDataType}
					/>
				</div>
				<div
					className='list-country-data'
					onClick={() => {
						countryChangeHandler("Worldwide");
					}}>
					<div className='button-left' style={{ width: "70px" }}>
						World
					</div>{" "}
					{/* key used here to let react know this needs to be rerendered to show animation again */}
					<div
						key={selectedDataType.dataType}
						className='button-right'
						style={{ width: "100%" }}>
						<div
							className='list-bar world'
							style={{
								width: "100%",
								height: "20px",
								marginRight: "5px",
								backgroundColor: `${typeColors[selectedDataType.dataType].color}`,
							}}></div>
						<div className='list-number'>{numeral(worldData).format("0,0")}</div>
					</div>
				</div>
				{sortedData.map(
					(country) =>
						country.id && (
							<div
								className='list-country-data'
								onClick={() => {
									countryChangeHandler(country.country);
								}}
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
											width: `${(country.typeValue / worldData) * 100}%`,
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
