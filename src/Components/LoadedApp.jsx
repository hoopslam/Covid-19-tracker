import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "leaflet/dist/leaflet.css";
import SelectedApp from "./SelectedApp";
import Selectors from "./Selectors";
import MapComponent from "./MapComponent";

const LoadedApp = ({ globalData, countryNames }) => {
	const [selectedCountry, setSelectedCountry] = useState("Worldwide");
	const [selectedDataType, setSelectedDataType] = useState({
		text: "New Cases",
		dataType: "todayCases",
	});
	const [selectedDataTypeData, setSelectedDataTypeData] = useState();
	const [selectedCountryInfo, setSelectedCountryInfo] = useState();

	useEffect(() => {
		makeCountryInfo("Worldwide");
		makeDataTypeData(selectedDataType);
	}, []);

	//Called in typeChangeHandler.  Fires up whenever a new data type is selected
	const makeDataTypeData = (selectedType) => {
		let countriesDetailArray = globalData.countries.map((country) => {
			let countryObject = {
				country: country.country,
				flag: country.countryInfo.flag,
				id: country.countryInfo._id,
				iso2: country.countryInfo.iso2,
				iso3: country.countryInfo.iso3,
				lat: country.countryInfo.lat,
				lng: country.countryInfo.long,
				cat: selectedType.dataType,
				text: selectedType.text,
			}
			country[selectedType.dataType] ? countryObject.typeValue = country[selectedType.dataType]
				:countryObject.typeValue = 0;  //Some countries do not have vaccine data, so 0 is placed as value if datatype is vaccine
			
			if(selectedType.dataType !== 'countriesVaccine'){
				return countryObject;
			} else { //It is data type countriesVaccine
				let countryVacData = globalData.countriesVaccine.find((vacCountry) => vacCountry.country === country.country) //check if country has vaccine data
				countryVacData && (countryObject.typeValue = Object.values(countryVacData.timeline)[0]) //country has vaccine data, push into typeValue
				return countryObject;
			}
		})
		setSelectedDataTypeData(countriesDetailArray)
	};

	//Called in CountryChangeHandler.  Fires up whenever a new country is selected
	const makeCountryInfo = (selectedCountry) => {
		selectedCountry === "Worldwide"
			? setSelectedCountryInfo(globalData.world)
			: setSelectedCountryInfo(
					globalData.countries.find((country) => country.country === selectedCountry)
			  );
	};

	const countryChangeHandler = (selectedCountry) => {
		setSelectedCountry(selectedCountry);
		makeCountryInfo(selectedCountry);
	};

	const typeChangeHandler = (selectedType) => {
		let data = {
			text: selectedType.target.innerText,
			dataType: selectedType.target.dataset.value,
		};
		setSelectedDataType(data);
		makeDataTypeData(data);
	};
	if (!selectedDataTypeData || !selectedCountryInfo) {
		return (
			<div className='Loader-container'>
				<Loader />
			</div>
		);
	} else {
		return (
			<div className='Loaded-app'>
				<header className='LoadedApp-header'>
					<h1>Global Covid-19 Tracker</h1>
					<Selectors
						countryChangeHandler={countryChangeHandler}
						countryNames={countryNames}
						selectedCountry={selectedCountry}
						selectedDataType={selectedDataType}
						typeChangeHandler={typeChangeHandler}
					/>
					<div className='map-container'>
						<MapComponent
							selectedDataTypeData={selectedDataTypeData}
							mapCenter={{
								lat: selectedCountryInfo.countryInfo.lat,
								lng: selectedCountryInfo.countryInfo.long,
							}}
							selectedCountry={selectedCountry}
							countryChangeHandler={countryChangeHandler}
						/>
					</div>
				</header>
				<SelectedApp
					selectedDataTypeData={selectedDataTypeData}
					selectedCountryInfo={selectedCountryInfo}
					selectedCountry={selectedCountry}
					selectedDataType={selectedDataType}
					countryChangeHandler={countryChangeHandler}
					typeChangeHandler={typeChangeHandler}
					worldData={globalData.world[selectedDataType.dataType]}
				/>
			</div>
		);
	}
};

export default LoadedApp;
