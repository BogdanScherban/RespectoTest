import React, {useState} from 'react';
import moment from 'moment';

import { Field, reduxForm } from 'redux-form'

import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
        paddingLeft: 10,
        paddingRight: 20,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const ReservationForm = ({ devices, currentDate, onSubmit, switchMode }) => {

    const classes = useStyles();

    const [state, setState] = useState({
        date: moment(currentDate).format('YYYY-MM-DD'),
        device: null,
        from: '09:00',
        to: '18:00',
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (e, data) => {
        e.preventDefault();
        onSubmit(data);
        switchMode();
    };

    const { date, device, from, to } = state;

    const DeviceSelector = () => (
        <Select
            labelId="deviceSelectorLabel"
            id="deviceSelector"
            name='device'
            value={device}
            data-cy="deviceSelector"
            onChange={handleChange}
        >
            {
                devices && devices.map((item, key) => {
                    return (
                        <MenuItem key={key} value={item.id}>{item.model}</MenuItem>
                    )
                })
            }
        </Select>
    );

    const DateInput = () => {
        return (
            <TextField
                id="date"
                label="Date"
                type="date"
                name='date'
                defaultValue={moment(date).format('YYYY-MM-DD')}
                className={classes.textField}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        )
    };

    const TimeFromInput = () => {
        return (
            <TextField
                id="time-from"
                label="From"
                type="time"
                name='from'
                value={from}
                defaultValue="09:00"
                className={classes.textField}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1800,
                }}
            />
        )
    };

    const TimeToInput = () => {
        return (
            <TextField
                id="time-to"
                label="To"
                type="time"
                name='to'
                value={to}
                defaultValue="18:00"
                onChange={handleChange}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 1800,
                }}
            />
        )
    };

    return (
        <div className={classes.root}>
            <Typography>Add new reservation:</Typography>
            <form className={classes.container} onSubmit={e => handleSubmit(e, state)}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="deviceSelectorLabel">Device</InputLabel>
                    <Field
                        name="device"
                        value={date}
                        component={DeviceSelector}
                        required={true}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Field
                        name="device"
                        value={device}
                        component={DateInput}
                        required={true}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Field
                        name="from"
                        value={from}
                        component={TimeFromInput}
                        required={true}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Field
                        name="to"
                        value={to}
                        component={TimeToInput}
                        required={true}
                    />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'ReservationForm'
})(ReservationForm);