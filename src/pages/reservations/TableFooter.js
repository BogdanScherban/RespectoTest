import React from 'react';
import {makeStyles} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        '&:not(:last-child)': {
            paddingRight: 20,
            borderRight: '1px solid #e7e7e7',
        }
    },
    iconByOther: {
        color: '#7CD9FF',
        marginRight: 5,
    },
    iconByMe: {
        color: '#5925A8',
        marginRight: 5,
    }
});

const TableFooter = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.list}>
                <div className={classes.listItem}>
                    <FiberManualRecordIcon fontSize='small' className={classes.iconByOther} />
                    <Typography>Reserved by others</Typography>
                </div>
                <div className={classes.listItem}>
                    <FiberManualRecordIcon fontSize='small' className={classes.iconByMe} />
                    <Typography>Reserved by me</Typography>
                </div>
            </div>
        </div>
    )
};

export default TableFooter;
