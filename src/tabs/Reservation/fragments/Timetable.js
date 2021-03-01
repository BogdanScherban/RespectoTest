import React from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";

import { COLOR_FOR_OTHERS, COLOR_FOR_ME } from "./constants";

const useStyles = {
    root: {
        backgroundColor: '#ffffff',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        width: 1400,
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
};

const Timetable = ({ classes, devices, currentDate }) => {

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
                                    {(hour < 10) ? '0' + hour + ':00' : hour + ':00'}
                                </Typography>
                            </div>
                            {
                                devices.map((item, key) => {


                                    let reservations = item.reservations;
                                    let isLeftReserved = false;
                                    let isRightReserved = false;
                                    let style = null;

                                    reservations.forEach(reservation => {

                                        let hourFrom = Number(moment(currentDate + ' ' + hour + ':00:00').format('X'));
                                        let hourMiddle = hourFrom + 1800;
                                        let hourTo = hourFrom + 3600;

                                        let color = (Number(reservation.user_id) === 1) ? COLOR_FOR_ME : COLOR_FOR_OTHERS;

                                        if (Number(hourFrom) === Number(reservation.from) || (Number(hourFrom) > Number(reservation.from) && Number(hourMiddle) <= Number(reservation.to))) {
                                            isLeftReserved = true;
                                        }
                                        if (Number(hourMiddle) === Number(reservation.from) || (Number(hourMiddle) > Number(reservation.from) && Number(hourTo) <= Number(reservation.to))) {
                                            isRightReserved = true;
                                        }

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
                                    });

                                    return (
                                        <div key={'cell-' + key + '-item-' + item.from + '-' + item.to} className={classes.tableRow} style={style}></div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>
        );
};

export default withStyles(useStyles)(Timetable);
