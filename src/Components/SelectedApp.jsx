import React from "react";
import CountrySummary from "./CountrySummary";
import BarGraph from "./BarGraph";

const SelectedApp = ({
	selectedCountryInfo,
	selectedDataTypeData,
	selectedDataType,
	countryChangeHandler,
}) => {
	return (
		<div className='SelectedApp'>
			<div className='details'>
				<section className='country-section'>
					<CountrySummary selectedCountryInfo={selectedCountryInfo} />
				</section>
				<section className='type-list'>
					<BarGraph
						selectedDataType={selectedDataType.text}
						selectedDataTypeData={selectedDataTypeData}
						countryChangeHandler={countryChangeHandler}
					/>
				</section>
			</div>
		</div>
	);
};

export default SelectedApp;
