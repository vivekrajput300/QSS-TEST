import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { rootPath } from '../../helpers/routes';
import AllLocations from '../../components/pages/AllLocations';

class Location extends Component {
    render() {
        return (
            <Switch>
                <Route path={rootPath} exact={true} component={AllLocations} />
                <Route path="*" exact render={() => (<div>Not Found</div>)} />
            </Switch>
        )
    }
}

export default Location;
