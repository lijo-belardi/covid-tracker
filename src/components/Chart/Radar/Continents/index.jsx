import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler } from 'chart.js'
import { Radar } from 'react-chartjs-2'
// Others import
import apiClient from '../../../../apiClient'
import requests from '../../../../apiClient/requests'
import logErrors from '../../../../utility/consoleShortcuts'

ChartJS.register(
    Tooltip,
    Filler,
    CategoryScale,
    BarElement,
    LinearScale,
    RadialLinearScale
)


const ContinentsRadarChart = () => {
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

    // RadarChart - data's configuration
    let data = {
        // labels --> continents's name
        labels: continentsData?.map(continent => continent.continent),
        datasets: [{
            label: 'Cases',
            backgroundColor: 'rgba(26, 118, 211, 0.55)',
            // data --> numbers of cases 
            data: continentsData?.map(continent => continent.cases),
            borderWidth: 1
        },
        {
            label: 'Deaths',
            backgroundColor: 'rgb(211, 47, 48, 0.55)',
            // data --> numbers of deaths 
            data: continentsData?.map(continent => continent.deaths),
            borderWidth: 1
        },
        {
            label: 'Recovered',
            backgroundColor: 'rgb(129, 199, 132, 0.55)',
            // data --> numbers of recovered 
            data: continentsData?.map(continent => continent.recovered),
            borderWidth: 1
        }
        ]
    }

    
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
    return (<Radar data={data} style={{ maxHeight: 400 }} options={options} />)
}

export default ContinentsRadarChart