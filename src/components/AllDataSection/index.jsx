import React, { useContext, useState, useEffect } from 'react'
import styles from './index.module.scss' 
import apiClient from '../../apiClient'
import { AllGlobalDataContext } from '../../context/AllGlobalData'
import logErrors from '../../utility/consoleShortcuts'
import {Container, Typography} from '@mui/material'

const AllDataSection = () => {
    const [data, setData] = useContext(AllGlobalDataContext)
    console.log(data);

    return (
        <Container className={styles.globalDataContainer}>
            <Typography variant='h4'>Global Data</Typography>
            <p>{data.cases}</p>

        </Container>
    )
}

export default AllDataSection