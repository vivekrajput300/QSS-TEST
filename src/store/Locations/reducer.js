import { ACTION_TYPES } from './';

const initialState = {
    locations: []
};

const address = (values) => {
    let addressObj = {
        addressLine1: values.addressLine1,
        suiteNo: values.suiteNo,
        addressLine2: values.addressLine2,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode
    };
    let address = '';
    Object.keys(addressObj).forEach(data => {
        if (data !== 'zipCode') {
            address += addressObj[data] ? (` ${addressObj[data]}`) : '';
        } else {
            address += addressObj[data] ? ` (${addressObj[data]})` : '';
        }
    })
    return address;
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_LOCATION:
            state.locations.push({
                id: new Date().getTime(),
                locationName: action.value.locationName,
                address: address(action.value),
                phoneNo: action.value.phoneNo,
                addressLine1: action.value.addressLine1,
                suiteNo: action.value.suiteNo,
                addressLine2: action.value.addressLine2,
                city: action.value.city,
                state: action.value.state,
                zipCode: action.value.zipCode,
                timeZone: action.value.timeZone,
                facilityTimes: action.value.facilityTimes,
                appointmentPool: action.value.appointmentPool
            })
            return {
                ...state,
                'locations': state.locations
            }
        case ACTION_TYPES.DELETE_LOCATION:
            state.locations.splice(action.value.index, 1);
            return {
                ...state,
                'locations': state.locations
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
