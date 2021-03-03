import React from 'react';

import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

import DevicesList from './DevicesList';
import Timetable from './Timetable';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#ffffff',
        overflowX: 'hidden',
    },
});

const ReservationsTable = ({ devices, currentDate }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={2}>
                    <DevicesList devices={devices} />
                </Grid>
                <Grid item xs={10}>
                    <Timetable devices={devices} currentDate={currentDate} />
                </Grid>
            </Grid>
        </div>
    );
};

export default ReservationsTable;
