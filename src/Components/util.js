import React from "react";
import { Circle, Tooltip } from "react-leaflet";
import numeral from "numeral";

export const typeColors = {
	cases: {
		color: "#ff7300",
		multiplier: 300,
	},
	todayCases: {
		color: "#ff7300",
		multiplier: 2500,
	},
	deaths: {
		color: "#ff1616e0",
		multiplier: 2000,
	},
	todayDeaths: {
		color: "#ff1616e0",
		multiplier: 10000,
	},
	recovered: {
		color: "rgb(31, 150, 77)",
		multiplier: 300,
	},
	todayRecovered: {
		color: "rgb(31, 150, 77)",
		multiplier: 2000,
	},
	active: {
		color: "#ff7300",
		multiplier: 300,
	},
	critical: {
		color: "#ff1616e0",
		multiplier: 4000,
	},
	casesPerOneMillion: {
		color: "#ff7300",
		multiplier: 500,
	},
	deathsPerOneMillion: {
		color: "#ff1616e0",
		multiplier: 5000,
	},
};

export const makeCircle = (selectedDataTypeData, countryChangeHandler) => {
	return selectedDataTypeData.map(
		(country) =>
			country.iso2 && (
				<Circle
					center={[country.lat, country.lng]}
					pathOptions={{
						color: typeColors[country.cat].color,
						fillColor: typeColors[country.cat].color,
					}}
					fillOpacity={0.5}
					radius={Math.sqrt(country.typeValue) * typeColors[country.cat].multiplier}
					key={country.iso2}
					eventHandlers={{
						click: () => {
							countryChangeHandler(country.country)
						},
					}}>
					<Tooltip>
						<div className='Tooltip-container'>
							{country.flag ? (
								<img 
									src={country.flag}
									alt='flag'
									style={{ height: "30px", width: "auto" }}
								/>
							) : null}
							<div>{country.country}</div>
							<div>{`${country.text}: ${numeral(country.typeValue).format(
								"0,0"
							)}`}</div>
						</div>
					</Tooltip>
				</Circle>
			)
	);
};
