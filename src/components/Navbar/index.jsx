import React from 'react'
import styles from './index.module.scss'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'


const Navbar = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar className={styles.Navbar}>
                <Toolbar className={styles.Toolbar}>
                    <Typography variant='h6'>
                        Covid - tracker
                    </Typography>

                    <Typography variant='h6'>
                        USA
                    </Typography>

                    <Typography variant='h6'>
                        Continents 
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>

    )
}

/* TODO risolvere Navbar */

export default Navbar