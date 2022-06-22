// React
import React from 'react'
import { NavLink } from 'react-router-dom'
// MUI Components
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
// Styles
import styles from './index.module.scss'

const Navbar = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar className={styles.Navbar}>
                <Toolbar className={styles.Toolbar}>
                    <Typography variant='h6'>
                        <NavLink to={'/'}>Covid - tracker</NavLink>
                    </Typography>

                    <Typography variant='h6'>
                    <NavLink to={'/continents'}>Continents</NavLink>
                    </Typography>

                    <Typography variant='h6'>
                        <NavLink to={'/countries/usa'}>USA</NavLink>
                    </Typography>

                    <Typography variant='h6'>
                        <NavLink to={'/countries/italy'}>Italy</NavLink>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Container>

    )
}

/* TODO risolvere Navbar */
/* TODO fare campo search */

export default Navbar