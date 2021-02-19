import React from 'react';
import moment from 'moment';

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

const DateSwitcher = ({ currentDate, changeDate }) => {

    const classes = useStyles();

    const dayBefore = moment(currentDate).subtract(1, 'days');
    const dayAfter = moment(currentDate).add(1, 'days');

    return (
        <div className={classes.root}>
            <IconButton
                variant="contained"
                color="primary"
                aria-label="back"
                onClick={() => changeDate(dayBefore)}
            >
                <ChevronLeft />
            </IconButton>
            <Typography>
                {currentDate}
            </Typography>
            <IconButton
                variant="contained"
                color="primary"
                aria-label="next"
                onClick={() => changeDate(dayAfter)}
            >
                <ChevronRight />
            </IconButton>
        </div>
    );
};

export default DateSwitcher;
