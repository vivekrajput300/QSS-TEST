import { ACTION_TYPES } from './'

const addLocation = (value) => {
  return {
    type: ACTION_TYPES.ADD_LOCATION,
    value: value
  }
}

const deleteLocation = value => {
  return {
    type: ACTION_TYPES.DELETE_LOCATION,
    value: value
  }
}

const updateLocation = value => {
  return {
    type: ACTION_TYPES.UPDATE_LOCATION,
    value: value
  }
}

export {
  addLocation,
  deleteLocation,
  updateLocation
};