// React
import React, { useState } from 'react';
// Mui components
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';

export default function NestedList(props) {
    const [open, setOpen] = useState(false);
    const [openCountriesList, setOpenCountriesList] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const handleClickCountries = () => {
        setOpenCountriesList(!openCountriesList)
    }

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{ padding: '1rem' }}>
                    <Typography variant='h6'>
                        {props.continentName}
                    </Typography>
                </ListSubheader>}>

            <ListItemButton onClick={handleClick}>
                <Typography>Details</Typography>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton >
                        <ListItemText>
                            <Box>
                                <Typography
                                    sx={{ backgroundColor: '#1a76d3', color: '#FAF8FF', paddingLeft: '0.2rem' }}
                                    variant='h6'>Basic information</Typography>
                                <Typography sx={{ marginTop: '0.5rem' }}> Population: {props.population}</Typography>
                                <Typography>Latitude: {props.coordinates.lat}</Typography>
                                <Typography>Longitude: {props.coordinates.long}</Typography>
                            </Box>

                            <Box sx={{ marginTop: '0.5rem' }}>
                                <Typography
                                    sx={{ backgroundColor: '#1a76d3', color: '#FAF8FF', paddingLeft: '0.2rem', marginTop: '0.5rem' }}
                                    variant='h6'>Cases</Typography>
                                <Typography sx={{ marginTop: '0.5rem' }}> Total: {props.cases} </Typography>
                                <Typography>Today: {props.todayCases}</Typography>
                            </Box>

                            <Box sx={{ marginTop: '0.5rem' }}>
                                <Typography
                                    sx={{ backgroundColor: '#1a76d3', color: '#FAF8FF', paddingLeft: '0.2rem', marginTop: '0.5rem' }}
                                    variant='h6'>Deaths</Typography>
                                <Typography sx={{ marginTop: '0.5rem' }}> Total: {props.deaths}</Typography>
                                <Typography>Today: {props.todayDeaths}</Typography>
                            </Box>

                            <Box sx={{ marginTop: '0.5rem' }}>
                                <Typography
                                    sx={{ backgroundColor: '#1a76d3', color: '#FAF8FF', paddingLeft: '0.2rem', marginTop: '0.5rem' }}
                                    variant='h6'>Recovered</Typography>
                                <Typography sx={{ marginTop: '0.5rem' }}> Total: {props.deaths} </Typography>
                                <Typography>Today: {props.todayRecovered}</Typography>
                            </Box>

                        </ListItemText>
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton onClick={handleClickCountries}>
                <Typography>Countries ({props.countries.length})</Typography>
                {openCountriesList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openCountriesList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton >
                        <ListItemText>
                            <Box>
                                {props.countries.join(' - ')}
                            </Box>
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Collapse>

        </List>
    );
}
