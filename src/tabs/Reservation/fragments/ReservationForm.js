import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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

const ReservationForm = ({ devices }) => {

    const classes = useStyles();

    const [state, setState] = useState({
        device: null,
        from: null,
        to: null,
    });


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    const { device, from, to } = state;

    return (
        <div className={classes.root}>
            <form className={classes.container} noValidate>
                <FormControl className={classes.formControl}>
                    <InputLabel id="deviceSelectorLabel">Device</InputLabel>
                    <Select
                        labelId="deviceSelectorLabel"
                        id="deviceSelector"
                        name='device'
                        value={device}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Not selected</em>
                        </MenuItem>
                        {
                            devices && devices.map(item => {
                                return (
                                    <MenuItem value={item.id}>{item.model}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="datetime-local"
                        label="From"
                        type="datetime-local"
                        name='from'
                        value={from}
                        className={classes.textField}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="datetime-local"
                        label="To"
                        type="datetime-local"
                        name='to'
                        value={to}
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <Button variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default ReservationForm;