import React from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { RenderInput } from '../atoms/input';
import { renderSelectDropDown } from '../atoms/inputDropdown';
import FacilityTimes from '../forms/FaclityTimeForm';

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
        if (formProps.zipCode) {
            if (!/^[a-zA-Z0-9\-_]{0,10}$/i.test(formProps.zipCode)) {
                errors.zipCode = 'Please enter a valid Zip code (Alphanumeric 5-10 chars, No space allowed)';
            }
        }
        if (formProps.phoneNo) {
            if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i.test(formProps.phoneNo)) {
                errors.phoneNo = 'Please enter a valid phone no (US format eq (XXX) XXX-XXXX OR XXX XXX XXXX)';
            }
        }
    });
    return errors;
};

function AddUpdateLocationForm(props) {
    const { handleSubmit } = props;
    const classes = useStyles();
    const [openFacility, setOpenFacility] = React.useState(false);
    const facilyHandleClose = () => {
        setOpenFacility(false);
    }

    const facilyHandleSave = facilities => {
        console.log("facilities", facilities)
    }

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
                <Field
                    name="city"
                    component={RenderInput}
                    label="City"
                />
            </div>
            <div className="padLeft_10">
                <Field
                    classes={classes}
                    name="state"
                    component={renderSelectDropDown}
                    label="State"
                >
                    {/* This is static data, if data comes from API then we create option dynamically using map and return options */}
                    <option value="" />
                    <option value={'up'}>UP</option>
                    <option value={'uk'}>UK</option>
                    <option value={'delhi'}>Delhi</option>
                </Field>
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
            <div className="padLeft_10">
                <Field
                    classes={classes}
                    name="timeZone"
                    component={renderSelectDropDown}
                    label="Time Zone"
                >
                    {/* This is static data, if data comes from API then we create option dynamically using map and return options */}
                    <option value="" />
                    <option value={'IST'}>IST</option>
                    <option value={'UTC'}>UTC</option>
                </Field>
            </div>
            <div>
                <Field
                    name="facilityTimes"
                    component={RenderInput}
                    label="Facility Times"
                    onClick={() => {
                        setOpenFacility(true);
                    }}
                />
                <FacilityTimes open={openFacility} handleClose={facilyHandleClose} handleSave={facilyHandleSave.bind(this)} />
                <Field
                    name="appointmentPool"
                    component={RenderInput}
                    label="Appointment Pool"
                />
            </div>
            <div>
                <Button type="submit" variant="contained" className="buttonRight padLeft_10" color="primary">
                    {window.location.search ? 'Update' : 'Save'}
                </Button>
                <Button variant="contained" className="buttonRight" color="secondary" onClick={props.cancel}>
                    Cancel
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