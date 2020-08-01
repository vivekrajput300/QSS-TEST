import React from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { RenderInput } from '../atoms/input';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 500,
        },
    },
}));

const initialValue = props => {
    let location = {};
    if (window.location.search) {
        location = props.addedLocations.find(data => {
            return data.id === +(window.location.search.split('=')[1])
        })
    }
    return {
        locationName: location ? location.locationName : '',
        addressLine1: location ? location.addressLine1 : '',
        suiteNo: location ? location.suiteNo : '',
        addressLine2: location ? location.addressLine2 : '',
        city: location ? location.city : '',
        state: location ? location.state : '',
        zipCode: location ? location.zipCode : '',
        phoneNo: location ? location.phoneNo : '',
        timeZone: location ? location.timeZone : '',
        facilityTimes: location ? location.facilityTimes : '',
        appointmentPool: location ? location.appointmentPool : '',
        id: location ? location.id : '',
    }
};

const validate = formProps => {
    const errors = {};
    const requiredFields = [
        'locationName'
    ];
    requiredFields.forEach(field => {
        if (!formProps[field]) {
            errors[field] = 'Required';
        }
    });
    return errors;
};

function AddUpdateLocationForm(props) {
    const { handleSubmit } = props;
    const classes = useStyles();
    return (
        <form className={classes.root} onSubmit={handleSubmit} noValidate>
            <div>
                <h2>{window.location.search ? 'Edit Locations' : 'Add Locations'}</h2>
            </div>
            <div>
                <Field
                    name="locationName"
                    component={RenderInput}
                    label="Location Name"
                />
            </div>
            <div>
                <Field
                    name="addressLine1"
                    component={RenderInput}
                    label="Address Line 1"
                />
                <Field
                    name="suiteNo"
                    component={RenderInput}
                    label="Suite No."
                />
            </div>
            <div>
                <Field
                    name="addressLine2"
                    component={RenderInput}
                    label="Address Line 2"
                />
            </div>
            <div>
                <Field
                    name="city"
                    component={RenderInput}
                    label="City"
                />
                <Field
                    name="state"
                    component={RenderInput}
                    label="State"
                />
            </div>
            <div>
                <Field
                    name="zipCode"
                    component={RenderInput}
                    label="Zip Code"
                />
                <Field
                    name="phoneNo"
                    component={RenderInput}
                    label="Phone Number"
                />
            </div>
            <div>
                <Field
                    name="timeZone"
                    component={RenderInput}
                    label="Time Zone"
                />
            </div>
            <div>
                <Field
                    name="facilityTimes"
                    component={RenderInput}
                    label="Facility Times"
                />
                <Field
                    name="appointmentPool"
                    component={RenderInput}
                    label="Appointment Pool"
                />
            </div>
            <div>
                <Button variant="contained" className="buttonRight" color="secondary" onClick={props.cancel}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" className="buttonRight" color="primary">
                    {window.location.search ? 'Update' : 'Save'}
                </Button>
            </div>
        </form>
    )
};

AddUpdateLocationForm = reduxForm({
    form: 'AddUpdateLocationForm',
    validate
})(AddUpdateLocationForm);

export default AddUpdateLocationForm = connect((state, props) => ({
    myForm: state.form.AddUpdateLocationForm,
    initialValues: initialValue(props)
}), null)(AddUpdateLocationForm);