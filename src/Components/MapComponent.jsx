import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./MapComponent.css";
import ChangeView from "./ChangeView";
import makeCircle from "./util";

function MapComponent({ center, zoom, typeData}) {

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom} />
        {makeCircle(typeData)}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
