import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from '../src/store';
import { rootPath } from '../src/helpers/routes';
import Location from '../src/containers/Location/Location';

import './App.css';

function App() {
    return (
        //This file for container routes only
        <Provider store={store}>
            <BrowserRouter>
                <Route path={rootPath} component={Location} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
