import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";
import { makeCircle } from "./util";
import Loader from "./Loader";

function MapComponent({selectedDataTypeData, mapCenter, selectedCountry, countryChangeHandler}) {
	let zoom = 4;
	if(selectedCountry==="Worldwide"){
		zoom = 2;
	}
	if (!selectedDataTypeData || !mapCenter) {
		return (
			<div className='Loader-container'>
				<Loader />
			</div>
		);
	} else 

	return (
		<div className='map'>
			<MapContainer center={mapCenter} zoom={zoom} scrollWheelZoom={false} >
				<ChangeView center={mapCenter} zoom={zoom} />
				{makeCircle(selectedDataTypeData, countryChangeHandler)}
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
			</MapContainer>
		</div>
	);
}

export default MapComponent;
