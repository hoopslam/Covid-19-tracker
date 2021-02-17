import React, { useState, useEffect } from "react";
import "./App.css";
import LoadedApp from "./Components/LoadedApp";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";

function App() {
	const [globalData, setGlobalData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const [world, countries] = await Promise.all([
				fetch("https://disease.sh/v3/covid-19/all?yesterday=true").then((res) =>
					res.json()
				),
				fetch("https://disease.sh/v3/covid-19/countries?yesterday=true").then((res) =>
					res.json()
				),
			]).catch((err) => {
				console.log(err);
			});
			world.countryInfo = {lat: 15, long: 0};
			setGlobalData({ world: world, countries: countries });
		};
		fetchData();
	}, []);
	if (!globalData.world || !globalData.countries) {
		return (
			<div className='Loader-container'>
				<Loader />
			</div>
		);
	} else {
		return (
			<div className='App'>
				<LoadedApp
					globalData={globalData}
					countryNames={globalData.countries.map((country) => country.country)}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;