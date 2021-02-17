import React from "react";
import CountrySummary from "./CountrySummary";
import BarGraph from "./BarGraph";

const SelectedApp = ({
	selectedCountryInfo,
	selectedDataTypeData,
	selectedDataType,
	countryChangeHandler,
	worldData
}) => {
	return (
		<div className='SelectedApp'>
			<div className='details'>
			<section className='country-section'>
					<CountrySummary selectedCountryInfo={selectedCountryInfo}/>
				</section>
				<section className='type-list'>
					<BarGraph
						selectedDataType={selectedDataType}
						selectedDataTypeData={selectedDataTypeData}
						countryChangeHandler={countryChangeHandler}
						worldData={worldData}
					/>
				</section>
			</div>
		</div>
	);
};

export default SelectedApp;
