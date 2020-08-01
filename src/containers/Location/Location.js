import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { rootPath, addLocation } from '../../helpers/routes';
import AllLocations from '../../components/pages/AllLocations';
import AddUpdateLocation from '../../components/pages/AddUpdateLocation'

function Location() {
    return (
        //All location container routes
        <Switch>
            <Route path={rootPath} exact={true} component={AllLocations} />
            <Route path={addLocation} exact={true} component={AddUpdateLocation} />
            <Route path="*" exact render={() => (<div>Page Not Found</div>)} />
        </Switch>
    )
}

export default Location;
