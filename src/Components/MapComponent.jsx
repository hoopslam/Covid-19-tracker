import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import "./MapComponent.css";

function MapComponent({center, zoom}) {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>            
        </div>
    )
}

export default MapComponent
