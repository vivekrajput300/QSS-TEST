import { createStore, combineReducers, compose } from "redux";
import { reducer as formReducer } from 'redux-form';
import { LOCATION_REDUCER } from './Locations';

const rootReducers = combineReducers({
	form: formReducer,
	location: LOCATION_REDUCER.locationReducer
});

const composeEnhancers = window.location.host === 'localhost:3000' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
const enhancer = composeEnhancers();

const store = createStore(rootReducers, enhancer);

export default store;