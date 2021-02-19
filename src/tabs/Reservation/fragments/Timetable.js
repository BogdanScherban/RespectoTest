import React from 'react';
import moment from 'moment';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

import { COLOR_FOR_OTHERS, COLOR_FOR_ME } from "./constants";

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

const Timetable = ({ devices, currentDate }) => {
    const classes = useStyles();

    let hours = [];
    for (let i = 0; i <= 24; i++) {
        hours[i] = i;
    }

    const maxColumnHeight = 46 + devices.length * 150;

    return (
        <div className={classes.root} style={{minHeight: maxColumnHeight}}>
            {hours.map((hour, key) => {
                return (
                    <div key={key} className={classes.column}>
                        <div className={classes.tableHead}>
                            <Typography>
                                {(hour < 10) ? '0' + hour + ':00' : hour + ':00' }
                            </Typography>
                        </div>
                        {
                            devices.map((item, key) => {

                                let reservations = item.reservations;
                                let isLeftReserved = false;
                                let isRightReserved = false;
                                let isCurrentUser = false;
                                reservations.forEach(item => {

                                    let hourFrom = Number(moment(currentDate + ' ' + hour + ':00:00').format('X'));
                                    let hourMiddle = hourFrom + 1800;
                                    let hourTo = hourFrom + 3600;

                                    if (Number(item.user_id) === 1) {
                                        isCurrentUser = true;
                                    }
                                    if (Number(hourFrom) === Number(item.from) || (Number(hourFrom) > Number(item.from) && Number(hourMiddle) <= Number(item.to))) {
                                        isLeftReserved = true;
                                    }
                                    if (Number(hourMiddle) === Number(item.from) || (Number(hourMiddle) > Number(item.from) && Number(hourTo) <= Number(item.to))) {
                                        isRightReserved = true;
                                    }
                                });

                                let style = null;
                                let color = isCurrentUser ? COLOR_FOR_ME : COLOR_FOR_OTHERS;
                                if (isLeftReserved && isRightReserved) {
                                    style = {
                                        backgroundColor: color,
                                        borderLeftColor: color,
                                        borderRightColor: color,
                                    };
                                } else if (isLeftReserved) {
                                    style = {
                                        backgroundImage: 'linear-gradient(to right, ' + color + ' 50%, #ffffff 50%)',
                                        borderLeftColor: color,
                                    };
                                } else if (isRightReserved) {
                                    style = {
                                        backgroundImage: 'linear-gradient(to right, #ffffff 50%, ' + color + ' 50%)',
                                        borderRightColor: color,
                                    };
                                }

                                return (
                                    <div key={key} className={classes.tableRow} style={style}></div>
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
