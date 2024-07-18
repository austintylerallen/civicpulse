import axios from 'axios';
import { GET_FEEDBACKS, FEEDBACK_ERROR, ADD_FEEDBACK } from './types';

// Get Feedbacks
export const getFeedbacks = event_id => async dispatch => {
  try {
    const res = await axios.get(`/api/feedback/${event_id}`);

    dispatch({
      type: GET_FEEDBACKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Feedback
export const addFeedback = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/feedback', formData, config);

    dispatch({
      type: ADD_FEEDBACK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
