// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// My Components
import Header from '../../components/Header'
import CardInfo from '../../components/CardInfo'
import Title from '../../components/Title'
// MUI Components
import { Container, Grid, Typography } from '@mui/material'
// Others import 
import apiClient from '../../apiClient'

/* TODO completare la pagina */
const UsaStatePage = () => {
    const [data, setData] = useState([])
    const [counties, setCounties] = useState([])
    let params = useParams()

    useEffect(() => {
        async function getStateData() {
            try {
                const response = await apiClient.get(`https://disease.sh/v3/covid-19/states/${(params.state).toLowerCase()}`)
                setData(response.data)
            } catch (error) {
                console.log(error.name);
            }
        }
        getStateData()
    }, [params.state])


    useEffect(() => {
        async function getStateHistoricalData() {
            try {
                const response = await apiClient.get(`https://disease.sh/v3/covid-19/historical/usacounties/${(params.state).toLowerCase()}?lastdays=30`)

                setCounties(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getStateHistoricalData()
    }, [params.state])


    return (
        <div>
            <Header />

            <Container sx={{marginTop: '4rem'}}>
                <Title text={`${data.state} - Covid situation`} /> 
                <h3>Number of counties: {counties.length}</h3>
            </Container>

            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <CardInfo
                            title='Cases'
                            data={(data.cases)}
                            todayData={data.todayCases} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <CardInfo
                            title='Deaths'
                            data={(data.deaths)}
                            todayData={data.todayDeaths} />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <CardInfo
                            title='Recovered'
                            data={(data.recovered)}
                            todayData={data.todayRecovered} /> {/* TODO risolvere nel caso in cui non ci sia il dato specifico */}
                    </Grid>
                </Grid>
            </Container>

            {/* TODO bar con tutte le contee 
            usare le props */}

            {/* TODO tabella con tutte le contee 
            usare le props */}
        </div>
    )
}

export default UsaStatePage