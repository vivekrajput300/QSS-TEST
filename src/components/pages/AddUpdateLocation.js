import React from 'react';
import { connect } from 'react-redux';
import AddUpdateLocationForm from '../forms/AddUpdateLocationForm';
import * as LOCTAION_STORE from '../../store/Locations';
import { rootPath } from '../../helpers/routes';

function AddUpdateLocation(props) {
    const handleSubmit = fromProps => {
        if (fromProps.id) {
            props.updateLocation(fromProps);
            props.history.push(rootPath);
        } else {
            props.addLocation(fromProps);
            props.history.push(rootPath);
        }
    }

    const cancel = () => {
        props.history.push(rootPath);
    }

    return (
        <AddUpdateLocationForm onSubmit={handleSubmit.bind(this)} cancel={cancel} addedLocations={props.locations}></AddUpdateLocationForm>
    )
};

const mapStateToProps = state => ({ 'locations': state.location.locations });

const mapDispatchToProps = dispatch => ({
    addLocation: (value) => dispatch(LOCTAION_STORE.ACTION_CREATORS.addLocation(value)),
    updateLocation: (value) => dispatch(LOCTAION_STORE.ACTION_CREATORS.updateLocation(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUpdateLocation);
