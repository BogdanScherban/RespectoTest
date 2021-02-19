import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

import Typography from "@material-ui/core/Typography";

import { COLOR_FOR_OTHERS, COLOR_FOR_ME } from "./constants";

const useStyles = {
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
};

class Timetable extends Component {

    render() {
        const { classes, devices, currentDate } = this.props;

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
                                            console.log('LEFT');

                                        }
                                        if (Number(hourMiddle) === Number(item.from) || (Number(hourMiddle) > Number(item.from) && Number(hourTo) <= Number(item.to))) {
                                            isRightReserved = true;
                                            console.log('RIGHT');

                                        }
                                    });


                                    let style = null;
                                    if (isLeftReserved && isRightReserved) {
                                        let color = isCurrentUser ? COLOR_FOR_ME : COLOR_FOR_OTHERS;
                                        style = {
                                            backgroundColor: color,
                                            borderLeftColor: color,
                                            borderRightColor: color,
                                        };
                                    } else if (isLeftReserved) {
                                        let color = isCurrentUser ? COLOR_FOR_ME : COLOR_FOR_OTHERS;
                                        style = {
                                            backgroundImage: 'linear-gradient(to right, ' + color + ' 50%, #ffffff 50%)',
                                            borderLeftColor: color,
                                        };
                                    } else if (isRightReserved) {
                                        let color = isCurrentUser ? COLOR_FOR_ME : COLOR_FOR_OTHERS;
                                        style = {
                                            backgroundImage: 'linear-gradient(to right, #ffffff 50%, ' + color + ' 50%)',
                                            borderRightColor: color,
                                        };
                                    }

                                    console.log('style', style);

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
    }
}

export default withStyles(useStyles)(Timetable);
