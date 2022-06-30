// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Line } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// Others import
import apiClient from '../../../../../apiClient'
import requests from '../../../../../apiClient/requests'
import logErrors from '../../../../../utility/consoleShortcuts'

// ChartJs Register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

const LineChartUSALast30DaysData = () => {
    const [cases, setCases] = useState({})
    const [deaths, setDeaths] = useState({})

    let dates = Object.keys(cases)
    let casesDateValue = Object.values(cases)
    let deathsDateValue = Object.values(deaths)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await apiClient.get(requests.usaLast30Days)
                setCases(response.data.timeline.cases)
                setDeaths(response.data.timeline.deaths)
            } catch (error) {
                logErrors(error)
            }
        }
        getData()
    }, [])

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
                text: 'USA - Cases and Deaths',
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

    return (<Line data={data} options={options}  />)
}

export default LineChartUSALast30DaysData