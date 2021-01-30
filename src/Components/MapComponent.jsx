import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "./MapComponent.css";
import ChangeView from "./ChangeView";
import typeColors from "./util";

function MapComponent({ center, zoom, typeData}) {

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom} />
        {typeData.map(country => (
          <Circle
            center={[country.lat, country.lng]}
            fillColor={typeColors[country.cat].color}
            fillOpacity={0.5}
            radius={Math.sqrt(country.type) * typeColors[country.cat].multiplier}
          />))}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
