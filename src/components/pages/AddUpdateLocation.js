import React from 'react';
import { connect } from 'react-redux';
import AddUpdateLocationForm from '../forms/AddUpdateLocationForm';
import * as LOCTAION_STORE from '../../store/Locations';
import { rootPath } from '../../helpers/routes';

class AddUpdateLocation extends React.Component {
    handleSubmit = fromProps => {
        this.props.addLocation(fromProps);
        this.props.history.push(rootPath);
    }

    cancel = () => {
        this.props.history.push(rootPath);
    }

    render() {
        return (
            <AddUpdateLocationForm onSubmit={this.handleSubmit.bind(this)} cancel={this.cancel}></AddUpdateLocationForm>
        )
    }
};

const mapStateToProps = state => ({ 'locations': state.location.locations });

const mapDispatchToProps = dispatch => ({
    addLocation: (value) => dispatch(LOCTAION_STORE.ACTION_CREATORS.addLocation(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUpdateLocation);
