import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);