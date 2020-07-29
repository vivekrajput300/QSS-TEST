import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { rootPath } from '../../helpers/routes';

class Location extends Component {
    render() {
        return (
            <Switch >
                <Route path={rootPath} exact={true} render={() => (<div className="text-center">Test</div>)} />
                <Route path="*" render={() => (<div className="text-center">Test</div>)} />
            </Switch>
        )
    }
}

export default Location;
