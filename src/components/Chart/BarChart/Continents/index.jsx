import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
// Others import
import apiClient from '../../../../apiClient'
import requests from '../../../../apiClient/requests'
import logErrors from '../../../../utility/consoleShortcuts'

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale
)


const ContinentsBarChart = () => {
    const [continentsData, setContinentsData] = useState([])

    useEffect(() => {
        async function getContinentsData() {
            try {
                const response = await apiClient.get(requests.continentsData)
                setContinentsData(response.data)
            } catch (error) {
                logErrors(error)
            }
        }
        getContinentsData()
    }, [])

    // BarChart - data's configuration
    let data = {
        // labels --> continents's name
        labels: continentsData?.map(continent => continent.continent),
        datasets: [{
            label: 'Cases',
            backgroundColor: '#1a76d3',
            // data --> numbers of cases 
            data: continentsData?.map(continent => continent.cases),
            borderWidth: 1
        },
        {
            label: 'Deaths',
            backgroundColor: 'rgb(255, 99, 132',
            // data --> numbers of cases 
            data: continentsData?.map(continent => continent.deaths),
            borderWidth: 1
        },
        {
            label: 'Recovered',
            backgroundColor: 'rgb(129, 199, 132, 0.8)',
            // data --> numbers of cases 
            data: continentsData?.map(continent => continent.recovered),
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
        }
    }
    return (<Bar data={data} style={{ maxHeight: 400 }} options={options} />)
}

export default ContinentsBarChart