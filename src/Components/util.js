import React from "react";
import { Circle, Tooltip } from "react-leaflet";
import numeral from "numeral";

export const typeColors = {
	cases: {
		color: "#ff1616e0",
		multiplier: 300,
	},
	todayCases: {
		color: "#ff1616e0",
		multiplier: 2500,
	},
	deaths: {
		color: "#ff1616e0",
		multiplier: 1000,
	},
	todayDeaths: {
		color: "#ff1616e0",
		multiplier: 10000,
	},
	recovered: {
		color: "#0088ff",
		multiplier: 300,
	},
	todayRecovered: {
		color: "#0088ff",
		multiplier: 2000,
	},
	active: {
		color: "#ff1616e0",
		multiplier: 300,
	},
	critical: {
		color: "#ff1616e0",
		multiplier: 4000,
	},
	casesPerOneMillion: {
		color:"#ff1616e0",
		multiplier: 500,
	},
	deathsPerOneMillion: {
		color: "#ff1616e0",
		multiplier: 5000,
	},
	tests: {
		color: "#0088ff",
		multiplier: 100
	},
	countriesVaccine: {
		color: "#0088ff",
		multiplier: 100
	}
};

export const makeCircle = (selectedDataTypeData, countryChangeHandler) => {
	return selectedDataTypeData.map(
		(country) =>
			(country.typeValue > 0) && country.iso2 && (
				<Circle
					center={[country.lat, country.lng]}
					pathOptions={{
						color: typeColors[country.cat].color,
						fillColor: typeColors[country.cat].color,
					}}
					fillOpacity={0.5}
					radius={typeColors[country.cat].multiplier * Math.sqrt((country.typeValue / Math.PI))}
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
