import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#ffffff',
        overflow: 'auto',
        whiteSpace: 'nowrap',
    },
    column: {
        display: 'inline-block',
    },
    tableHead: {
        maxHeight: 46,
        backgroundColor: '#cedce2',
        padding: 10,
        paddingLeft: 15,
        border: '1px solid #e7e7e7'
    },
    tableRow: {
        padding: 10,
        paddingLeft: 15,
        height: 150,
        border: '1px solid #e7e7e7'
    },
});

const Timetable = ({ devices }) => {
    const classes = useStyles();

    let hours = [];
    for (let i = 0; i <= 24; i++) {
        hours[i] = i + ':00';
    }

    const maxColumnHeight = 46 + devices.length * 150;

    return (
        <div className={classes.root} style={{minHeight: maxColumnHeight}}>
            {hours.map(item => {
                return (
                    <div className={classes.column}>
                        <div className={classes.tableHead}>
                            <Typography>
                                {item}
                            </Typography>
                        </div>
                        {
                            devices.map(device => {
                                return (
                                    <div className={classes.tableRow}>
                                        111
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default Timetable;
