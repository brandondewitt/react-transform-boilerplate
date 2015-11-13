import * as PowerRanger from 'powerRanger/resource';
import * as ActionTypes from 'powerRanger/actionTypes';

export function find() {
  return {
    types: [ActionTypes.SEND_REQUEST, ActionTypes.RECEIVE_ALL, ActionTypes.SEND_REQUEST_FAILURE],
    callAPI: PowerRanger.find.bind(PowerRanger)
  };
}

export function findById(id) {
  return {
    types: [ActionTypes.SEND_REQUEST, ActionTypes.RECEIVE_ONE, ActionTypes.SEND_REQUEST_FAILURE],
    callAPI: PowerRanger.findById.bind(PowerRanger, id)
  };
}

export function create(ranger) {
  return dispatch => {
    return PowerRanger
      .create(ranger)
      .catch(response => console.warn(response));
  };
}

export function update(ranger) {
  return dispatch => {
    return PowerRanger
      .update(ranger)
      .catch(response => console.warn(response));
  };
}

export function destroy(id) {
  return dispatch => {
    return PowerRanger
      .destroy(id)
      .catch(response => console.warn(response));
  };
}
