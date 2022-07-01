// React
import React, { useState, useEffect } from 'react'
// React-Chartjs-2
import { Bar } from 'react-chartjs-2';
// Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
// Others import
import apiClient from '../../../../apiClient'
import requests from '../../../../apiClient/requests'
import logErrors from '../../../../utility/consoleShortcuts'

// ChartJs Register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement);

const BarChartUSALast30Days = () => {
    const [usaStatesLast30DaysCases, setUsaStatesLast30DaysCases] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await apiClient.get(requests.usaStates)
                setUsaStatesLast30DaysCases(response.data)
            } catch (error) {
                logErrors(error)
            }
        }
        getData()
    }, [])

    // BarChart - data's configuration
    let data = {
        // labels --> continents's name
        labels: usaStatesLast30DaysCases?.map(state => state.state),
        datasets: [{
            label: 'Cases',
            backgroundColor: '#1a76d3',
            // data --> numbers of cases 
            data: usaStatesLast30DaysCases?.map(state => state.cases),
            borderWidth: 1
        },
        {
            label: 'Deaths',
            backgroundColor: 'rgb(255, 99, 132)',
            // data --> numbers of cases 
            data: usaStatesLast30DaysCases?.map(state => state.deaths),
            borderWidth: 1
        }
        ]
    }

    // BarChart - options's configuration
    let options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legends: {
            labels: {
                fontSize: 36
            }
        },
        plugins: {
            title: {
                display: true,
                padding: 18.5,
                text: `USA's states - Cases and Deaths `,
                font: {
                    size: 18
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 10
                }
            }
        }
    }


    return (<Bar data={data} options={options} style={{maxHeight: 700}} />)
}

export default BarChartUSALast30Days