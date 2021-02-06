import React from "react";
import { Circle, Popup } from "react-leaflet";
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

export const makeCircle = (typeData) => {
  return typeData.map(
    (country) =>
      country.iso2 && (
        <Circle
          center={[country.lat, country.lng]}
          pathOptions={{
            color: typeColors[country.cat].color,
            fillColor: typeColors[country.cat].color,
          }}
          fillOpacity={0.5}
          radius={
            Math.sqrt(country.typeValue) * typeColors[country.cat].multiplier
          }
          key={country.iso2}
        >
          <Popup>
            <div className="popup">{country.country}</div>
            <div className="popup">
              {numeral(country.typeValue).format("0,0")}
            </div>
          </Popup>
        </Circle>
      )
  );
};

export const filterTypeData = (countriesData, selected={target: {dataset: {value: "todayCases"}, innerText: "New Cases"}}) => (
  countriesData.map(country => ({
    country: country.country,
    iso3: country.countryInfo.iso3,
    iso2: country.countryInfo.iso2,
    id: country.countryInfo._id,
    cat: selected.target.dataset.value,
    typeValue: country[selected.target.dataset.value],
    type: selected.target.innerText,
    lat: country.countryInfo.lat,
    lng: country.countryInfo.long,
  }))
  .sort((a, b) => b.typeValue - a.typeValue))