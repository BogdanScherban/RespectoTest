import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import {makeStyles} from "@material-ui/core";

import Navigation from '../../common/Navigation';

import DateSwitcher from '../../pages/reservations/DateSwitcher';
import AddReservationButton from '../../pages/reservations/AddReservationButton';
import ReservationsTable from '../../pages/reservations/ReservationsTable';
import TableFooter from '../../pages/reservations/TableFooter';
import ReservationForm from '../../pages/reservations/ReservationForm';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        margin: 10,
        backgroundColor: '#e7e7e7',
        paddingLeft: 20,
        paddingRight: 20,
    }
});

const ReservationComponent = () => {
    const classes = useStyles();

    const [tableMode, setTableMode] = useState(true);
    const switchMode = () => {
        setTableMode(!tableMode);
    };

    const devices = [
        { id: 1, model: 'HTC One M8', sku: 'HT519WM00429', },
        { id: 2, model: 'Motorola Moto X 2014', sku: 'TA9890AQPQ', },
    ];

    return (
        <Navigation>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid container item xs={12} direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <DateSwitcher />
                        </Grid>
                        <Grid container item xs={2} direction="row" justify="flex-end" alignItems="center">
                            <AddReservationButton mode={tableMode} switchMode={switchMode} />
                        </Grid>
                    </Grid>
                    {!tableMode && <ReservationForm devices={devices} />}
                    <Grid container item xs={12} direction="column" justify="space-between" alignItems="stretch">
                        <React.Fragment>
                            <ReservationsTable devices={devices} />
                            <TableFooter />
                        </React.Fragment>
                    </Grid>
                </Grid>
            </div>
        </Navigation>
    )
};

export default ReservationComponent;
