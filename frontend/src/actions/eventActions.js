import axios from 'axios';
import { GET_EVENTS, EVENTS_ERROR, GET_EVENT } from './types';

// Get Events
export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get('/api/events');

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Event by ID
export const getEvent = id => async dispatch => {
  try {
    const res = await axios.get(`/api/events/${id}`);

    dispatch({
      type: GET_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
