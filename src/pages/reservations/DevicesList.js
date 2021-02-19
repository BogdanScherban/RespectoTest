import React from 'react';

import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#ffffff',
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
    }
});

const DevicesList = ({ devices }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.tableHead}>
                <Typography>
                    Device / Time
                </Typography>
            </div>
            {
                devices && devices.map(item => {
                    return (
                        <div className={classes.tableRow}>
                            <Typography variant="button">{item.model}</Typography>
                            <Typography variant="subtitle1">{item.sku}</Typography>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DevicesList;
