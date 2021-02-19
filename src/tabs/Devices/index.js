import React from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Navigation from '../../common/Navigation';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        height: '100vh',
        backgroundColor: '#e7e7e7',
        padding: 20,
    },
});

const Devices = () => {
    const classes = useStyles();
    return (
        <Navigation>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Typography>
                        Information about devices will be here...
                    </Typography>
                </Grid>
            </div>
        </Navigation>
    )
};

export default Devices;