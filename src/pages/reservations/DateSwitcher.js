import React from 'react';

import {makeStyles} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

const DateSwitcher = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IconButton
                variant="contained"
                color="primary"
                aria-label="back"
            >
                <ChevronLeft />
            </IconButton>
            <Typography>
                Current date
            </Typography>
            <IconButton
                variant="contained"
                color="primary"
                aria-label="next"
            >
                <ChevronRight />
            </IconButton>
        </div>
    );
};

export default DateSwitcher;
