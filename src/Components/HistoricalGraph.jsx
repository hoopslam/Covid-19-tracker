import React, {useState, useEffect} from 'react'
import Loader from './Loader';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const HistoricalGraph = ({selectedCountryInfo}) => {
    const [historicalData, setHistoricalData] = useState([])
    const options = {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "New Cases by Date"
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
                label: function (tooltipItem) {
                    return numeral(tooltipItem.value).format("0,0");
                },
            },
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        format: "MM/DD/YY",
                        tooltipFormat: "ll",
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        callback: function (value, index, values) {
                            return numeral(value).format("0a");
                        },
                    },
                },
            ],
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            let historicalTotal;
            try {
                if(!selectedCountryInfo.country) {
                    const fetchedWorldData = await fetch ('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
                    const dataWorldJson = await fetchedWorldData.json();
                    historicalTotal = dataWorldJson;
                } else {
                    const fetchedData = await fetch(`https://disease.sh/v3/covid-19/historical/${selectedCountryInfo.countryInfo.iso2}?lastdays=all
                    `)
                    const dataJson = await fetchedData.json()
                    historicalTotal = dataJson.timeline
                }
            }
            catch (err) {
                console.log(err)
            }
            setHistoricalData(filterData(historicalTotal)) 
        }
        fetchData();
    }, [selectedCountryInfo])

    const filterData = (historicalTotal) => {
        let newCases = [];
        let previousCasesData;
        for (let date in historicalTotal.cases) {
            if (previousCasesData) {
                let newDate = {
                    x: date,
                    y: historicalTotal.cases[date] - previousCasesData,
                }
                newCases.push(newDate);
            }
            previousCasesData = historicalTotal.cases[date];
        }
        return newCases;        
    }

    return (
        <div className="HistoricalGraph">
            {!historicalData ? <Loader />:
                <Line options={options} data={{datasets: [{data: historicalData}]}}/>
            }
            
        </div>
    )
}

export default HistoricalGraph
