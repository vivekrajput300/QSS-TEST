import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export const renderSelectDropDown = ({
    input,
    label,
    id,
    name,
    meta: { touched, error },
    children,
    ...custom
}) => (
        <FormControl error={touched && error}>
            <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
            <Select
                native
                {...input}
                {...custom}
                inputProps={{
                    name: { name },
                    id: { id }
                }}
            >
                {children}
            </Select>
        </FormControl>
    )