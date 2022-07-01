// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Line } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
// Others import
import apiClient from '../../../../../apiClient'
import logErrors from '../../../../../utility/consoleShortcuts'
import requests from '../../../../../apiClient/requests'


// ChartJs Register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChartAllLast30DaysDeaths = () => {
    const [deaths, setDeaths] = useState({})
    let date = Object.keys(deaths)
    let deathsDateValue = Object.values(deaths)

    const data = {
        labels: date.map(day => day),
        datasets: [
            {
                label: 'Deaths',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: deathsDateValue.map(singleValue => singleValue),
            }
        ]
    };

    // BarChart - options's configuration
    let options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                display: false
            },
            title: {
                display: true,
                padding: 10,
                text: 'Deaths',
                font: {
                    size: 18
                }
            }
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await apiClient.get(requests.last30DaysData)
            setDeaths(response.data.deaths)
        } catch (error) {
            logErrors(error)
        }
    }

    return (<Line data={data} options={options} style={{ maxHeight: 400 }} />)
}

export default LineChartAllLast30DaysDeaths