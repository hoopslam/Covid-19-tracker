import React from "react";
import InfoCard from "./InfoCard";
import Donut from "./Donut";

function CountrySummary({ selectedCountryInfo }) {
	return (
		<div className='country-summary-container'>
			<div className='country-name'>
				{selectedCountryInfo.countryInfo.flag ? (
					<img
						src={selectedCountryInfo.countryInfo.flag}
						alt='flag'
						style={{ height: "70px", width: "auto" }}
					/>
				) : null}
				<h2>
					{selectedCountryInfo.country
						? selectedCountryInfo.country
						: "Worldwide Summary"}
				</h2>
			</div>
			<div className='InfoCard-row'>
				<InfoCard
					text={"Total Cases"}
					total={selectedCountryInfo.cases}
					today={selectedCountryInfo.todayCases}
				/>
				<InfoCard
					text={"Total Recovered"}
					total={selectedCountryInfo.recovered}
					today={selectedCountryInfo.todayRecovered}
					color={"#0088ff"}
				/>
				<InfoCard
					text={"Total Deaths"}
					total={selectedCountryInfo.deaths}
					today={selectedCountryInfo.todayDeaths}
					color={"#ff1616e0"}
				/>
			</div>
			<div className='Donut-container'>
				<Donut
					data={{
						datasets: [
							{
								data: [
									Math.round((selectedCountryInfo.recovered / selectedCountryInfo.cases + Number.EPSILON) * 100),
									Math.round(((selectedCountryInfo.active + selectedCountryInfo.critical) / selectedCountryInfo.cases + Number.EPSILON) * 100),
									Math.round((selectedCountryInfo.deaths / selectedCountryInfo.cases + Number.EPSILON) * 100),
								],
								backgroundColor: [
									"rgba(0, 122, 255, 0.8)",
									"rgba(200, 200, 200, 0.8)",
									"rgba(255, 22, 22, 0.8)",
								],
							},
						],
						labels: ["Recovery Rate", "Active", "Death Rate"],
					}}
					options={{
						title: {
							display: true,
							text: "Among Confirmed Cases",
						},
						legend: {
							position: "bottom",
						},
					}}
				/>
			</div>
			{/* 
      Infection Rate Pie Graph
      World Average
      Death Rate Pie Graph
      World Average

      Line Graph Historical 
       */}
		</div>
	);
}

export default CountrySummary;
