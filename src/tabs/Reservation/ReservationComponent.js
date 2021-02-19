import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

import Navigation from '../../common/Navigation';

import DateSwitcher from './fragments/DateSwitcher';
import AddReservationButton from './fragments/AddReservationButton';
import ReservationsTable from './fragments/ReservationsTable';
import TableFooter from './fragments/TableFooter';
import ReservationForm from './fragments/ReservationForm';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        marginTop: 10,
        backgroundColor: '#e7e7e7',
        paddingLeft: 20,
        paddingRight: 20,
    },
    loadingBlock: {
        margin: 10,
        backgroundColor: '#e7e7e7',
        paddingLeft: 20,
        paddingRight: 20,
    }
});

const ReservationComponent = ({ reservations, loading, getDevicesInfo, handleSubmit }) => {
    const classes = useStyles();

    const [tableMode, setTableMode] = useState(true);
    const [currentDate, setCurrentDate] = useState(moment().format('ll'));

    const switchMode = () => {
        setTableMode(!tableMode);
    };

    const changeDate = (newDate) => {
        setCurrentDate(moment(newDate).format('ll'));
    };

    useEffect(() => {
        getDevicesInfo(currentDate);
    }, [currentDate]);

    return (
        <Navigation>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid container item xs={12} direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <DateSwitcher currentDate={currentDate} changeDate={changeDate} />
                        </Grid>
                        <Grid container item xs={2} direction="row" justify="flex-end" alignItems="center">
                            <AddReservationButton mode={tableMode} switchMode={switchMode} />
                        </Grid>
                    </Grid>
                    {!tableMode && <ReservationForm devices={reservations} currentDate={currentDate} onSubmit={handleSubmit} />}
                    <Grid container item xs={12} direction="column" justify="space-between" alignItems="stretch">
                        {!reservations || loading ?
                            <div className={classes.loadingBlock}>
                                <Typography>Loading...</Typography>
                            </div>
                            :
                            <React.Fragment>
                                <ReservationsTable devices={reservations} currentDate={currentDate} />
                                <TableFooter />
                            </React.Fragment>
                        }
                    </Grid>
                </Grid>
            </div>
        </Navigation>
    )
};

export default ReservationComponent;
