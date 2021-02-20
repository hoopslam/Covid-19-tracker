import React from "react";
import InfoCard from "./InfoCard";
import Donut from "./Donut";
import HistoricalGraph from "./HistoricalGraph";
import numeral from "numeral";

function CountrySummary({ selectedCountryInfo }) {
	const tooltipPercentage = {
		callbacks: {
			label: function (tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var meta = dataset._meta[Object.keys(dataset._meta)[0]];
				var total = meta.total;
				var currentValue = dataset.data[tooltipItem.index];
				var percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
				return currentValue + " (" + percentage + "%)";
			},
			title: function (tooltipItem, data) {
				return data.labels[tooltipItem[0].index];
			},
		},
	};
	return (
		<div className='country-summary-container'>
			<div className='country-name'>
				{selectedCountryInfo.countryInfo.flag ? (
					<img
						src={selectedCountryInfo.countryInfo.flag}
						alt='flag'
						style={{ height: "70px", width: "auto", boxShadow: "2px 2px 5px grey" }}
					/>
				) : null}
				<h2>
					{selectedCountryInfo.country
						? selectedCountryInfo.country
						: "Worldwide Summary"}
				</h2>
				<p>
					Population: <b>{numeral(selectedCountryInfo.population).format("0,0")}</b>
				</p>
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
			<div className="percentages">

			</div>

			<div className='HistoricalGraph-container'>
				<HistoricalGraph selectedCountryInfo={selectedCountryInfo} />
			</div>
			<div className='Donut-container'>
				<Donut
					data={{
						datasets: [
							{
								data: [
									selectedCountryInfo.cases,
									selectedCountryInfo.population - selectedCountryInfo.cases,
								],
								backgroundColor: [
									"rgba(255, 22, 22, 0.8)",
									"rgba(200, 200, 200, 0.8)",
								],
							},
						],
						labels: ["Cases"],
					}}
					options={{
						tooltips: tooltipPercentage,
						title: {
							display: true,
							text: "Cases",
						},
						legend: {
							position: "bottom",
						},
					}}
				/>
				<Donut
					data={{
						datasets: [
							{
								data: [
									selectedCountryInfo.recovered,
									selectedCountryInfo.active + selectedCountryInfo.critical,
									selectedCountryInfo.deaths,
								],
								backgroundColor: [
									"rgba(0, 122, 255, 0.8)",
									"rgba(200, 200, 200, 0.8)",
									"rgba(255, 22, 22, 0.8)",
								],
							},
						],
						labels: ["Recovered", "Ongoing Case", "Deceased"],
					}}
					options={{
						tooltips: tooltipPercentage,
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
		</div>
	);
}

export default CountrySummary;
