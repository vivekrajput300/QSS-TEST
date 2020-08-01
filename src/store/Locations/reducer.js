import { ACTION_TYPES } from './';

const initialState = {
    'locations': [],
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LOCATION:
            return {
                ...state,
                'locations': action.value
            }
        case ACTION_TYPES.DELETE_LOCATION:
            return {
                ...state,
                'locations': action.value
            }
        case ACTION_TYPES.UPDATE_LOCATION:
            return {
                ...state,
                'locations': action.value
            }
        default:
            return state;
    }
}

export {
    locationReducer
};
