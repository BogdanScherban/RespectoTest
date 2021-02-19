import React from 'react';

import Button from '@material-ui/core/Button';

import Add from "@material-ui/icons/Add";
import Backspace from "@material-ui/icons/Backspace";

import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginRight: 10,
    },
});

const AddReservationButton = ({ mode, switchMode }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                mode ?
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Add />}
                        onClick={() => switchMode()}
                    >
                        Add Reservation
                    </Button>
                    :
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Backspace />}
                        onClick={() => switchMode()}
                    >
                        Back
                    </Button>
            }
        </div>
    )
};

export default AddReservationButton;