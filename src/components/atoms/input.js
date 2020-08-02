import React from 'react';
import TextField from '@material-ui/core/TextField';

export const RenderInput = ({
    input,
    label,
    required,
    meta: {
        touched, error
    },
    ...custom
}) => (
        <TextField
            label={label}
            error={touched && error}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )