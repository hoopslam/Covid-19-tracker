import React from "react";
import SearchBar from "./SearchBar";
import CountrySelector from "./CountrySelector";
import TypeSelector from "./TypeSelector";

const Selectors = ({
	countryChangeHandler,
	countryNames,
	selectedCountry,
	selectedDataType,
	typeChangeHandler,
}) => {
	return (
		<div>
			<nav className='LoadedApp-nav'>
				<SearchBar
					countryChangeHandler={countryChangeHandler}
					countryNames={countryNames}
				/>
				<div className='menu-container'>
					<CountrySelector
						countryChangeHandler={countryChangeHandler}
						countryNames={countryNames}
						selectedCountry={selectedCountry}
					/>
					<TypeSelector
						selectedDataType={selectedDataType.text}
						typeChangeHandler={typeChangeHandler}
					/>
				</div>
			</nav>
		</div>
	);
};

export default Selectors;
