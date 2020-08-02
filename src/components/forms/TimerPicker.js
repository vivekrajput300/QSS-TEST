import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
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

export default function TimePicker(props) {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate>
            <TextField
                id={props.id}
                label={props.label}
                type="time"
                defaultValue={props.defaultValue}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.handleChange && props.handleChange.bind(this)}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
        </form>
    );
}