import React from 'react';
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import AddUpdateLocationForm from '../forms/AddUpdateLocationForm';

class AddUpdateLocation extends React.Component {
    handleSubmit = fromProps => {
        console.log("fromProps", fromProps)
    }

    render() {
        return (
            <AddUpdateLocationForm onSubmit={this.handleSubmit.bind(this)}></AddUpdateLocationForm>
        )
    }
};

export default AddUpdateLocation;