import axios from 'axios';
import { GET_EVENTS, EVENTS_ERROR, GET_EVENT, CREATE_EVENT, UPDATE_EVENT } from './types';
import config from '../config';

// Get Events
export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get(`${config.API_URL}/events`);

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response?.statusText || 'Error', status: err.response?.status || 500 },
    });
  }
};

// Get Event by ID
export const getEvent = id => async dispatch => {
  try {
    const res = await axios.get(`${config.API_URL}/events/${id}`);

    dispatch({
      type: GET_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response?.statusText || 'Error', status: err.response?.status || 500 },
    });
  }
};

// Create Event
export const createEvent = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`${config.API_URL}/events`, formData, config);

    dispatch({
      type: CREATE_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response?.statusText || 'Error', status: err.response?.status || 500 },
    });
  }
};

// Update Event
export const updateEvent = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`${config.API_URL}/events/${id}`, formData, config);

    dispatch({
      type: UPDATE_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response?.statusText || 'Error', status: err.response?.status || 500 },
    });
  }
};
