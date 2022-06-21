// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Mui Components
import { Typography } from '@mui/material'
// Others import 
import apiClient from '../../apiClient'


const Country = () => {
    let params = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        getCountryDetails()
    }, [params.country])

    const getCountryDetails = async () => {
        try {
            const response = await apiClient.get(`/v3/covid-19/countries/${params.country}?strict=true`)
            console.log(response.data);
            setCountry(response.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <Typography variant='h3'>{country.country} - Covid Situation</Typography>
        </div>
    )
}

export default Country