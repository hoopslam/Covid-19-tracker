import React from "react";
import { Circle, Tooltip } from "react-leaflet";
import numeral from "numeral";

export const typeColors = {
	cases: {
		color: "#1673ff",
		multiplier: 300,
	},
	todayCases: {
		color: "#1673ff",
		multiplier: 2500,
	},
	deaths: {
		color: "#eb3434",
		multiplier: 2000,
	},
	todayDeaths: {
		color: "#eb3434",
		multiplier: 10000,
	},
	recovered: {
		color: "#00942a",
		multiplier: 300,
	},
	todayRecovered: {
		color: "#00942a",
		multiplier: 2000,
	},
	active: {
		color: "#1673ff",
		multiplier: 300,
	},
	critical: {
		color: "#eb3434",
		multiplier: 4000,
	},
	casesPerOneMillion: {
		color: "#1673ff",
		multiplier: 500,
	},
	deathsPerOneMillion: {
		color: "#eb3434",
		multiplier: 5000,
	},
};

export const makeCircle = (selectedDataTypeData) => {
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
					key={country.iso2}>
					<Tooltip>
						<div className="Tooltip-container">
							<div>{country.country}</div>
							<div>{`${country.text}: ${numeral(country.typeValue).format("0,0")}`}</div>
						</div>
					</Tooltip>
				</Circle>
			)
	);
};
