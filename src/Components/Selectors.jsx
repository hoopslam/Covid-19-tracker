import React from "react";
import SearchBar from "./SearchBar";
import TypeSelector from "./TypeSelector";

const Selectors = ({
	countryChangeHandler,
	countryNames,
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
				<TypeSelector
					selectedDataType={selectedDataType}
					typeChangeHandler={typeChangeHandler}
				/>
			</nav>
		</div>
	);
};

export default Selectors;
