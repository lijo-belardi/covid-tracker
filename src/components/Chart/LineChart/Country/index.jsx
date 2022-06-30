import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Others import
import logErrors from '../../../../utility/consoleShortcuts'
import apiClient from '../../../../apiClient'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const LineChartCountryLast30Days = ({ countryName }) => {
    const [cases, setCases] = useState({})
    const [deaths, setDeaths] = useState({})

    let dates = Object.keys(cases)
    let casesDateValue = Object.values(cases)
    let deathsDateValue = Object.values(deaths)

    useEffect(() => {
        async function getLast30DaysData() {
            try {
                const response = await apiClient.get(`/v3/covid-19/historical/${countryName}?lastdays=30`)
                console.log(response.data);
                setCases(response.data.timeline.cases)
                setDeaths(response.data.timeline.deaths)
            } catch (error) {
                logErrors(error)
            }
        }
        getLast30DaysData()
    }, [countryName])




    const data = {
        labels: dates.map(singleDay => singleDay),
        datasets: [
            {
                label: 'Cases',
                data: casesDateValue?.map(dateValue => dateValue),
                borderColor: 'rgba(26, 118, 211)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Deaths',
                data: deathsDateValue?.map(dateValue => dateValue),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y1',
            }
        ],
    };

    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: `${countryName} - Cases and Deaths `,
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    return <Line options={options} data={data} />;
}

export default LineChartCountryLast30Days