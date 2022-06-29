// React
import React, { useState } from 'react';
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

    const handleClick = () => {
        setOpen(!open);
    };

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
                    <Typography >
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
                                <Typography variant='h6'>Basic information</Typography>
                                <Typography>Population: {props.population}</Typography>
                                <Typography>Latitudine: {props.coordinates.lat}</Typography>
                                <Typography>Longitudine: {props.coordinates.long}</Typography>
                            </Box>
                            <Box sx={{ marginTop: '0.5rem' }}>
                                <Typography variant='h6'>Cases</Typography>
                                <Typography>Total: {props.cases}</Typography>
                                <Typography>Today: {props.todayCases}</Typography>
                            </Box>
                            <Box sx={{ marginTop: '0.5rem' }}>
                                <Typography variant='h6'>Deaths</Typography>
                                <Typography>Total: {props.deaths}</Typography>
                                <Typography>Today: {props.todayDeaths}</Typography>
                            </Box>
                            <Box sx={{ marginTop: '0.5rem' }}>
                                <Typography variant='h6'>Recovered</Typography>
                                <Typography>Total: {props.deaths}</Typography>
                                <Typography>Today: {props.todayRecovered}</Typography>
                            </Box>
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Collapse>




            
        </List>
    );
}
