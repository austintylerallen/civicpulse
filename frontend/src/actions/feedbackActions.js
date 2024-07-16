import axios from 'axios';
import { GET_FEEDBACKS, GET_FEEDBACK, FEEDBACK_ERROR, ADD_FEEDBACK, DELETE_FEEDBACK } from './types';

// Get Feedbacks
export const getFeedbacks = () => async dispatch => {
  try {
    const res = await axios.get('/api/feedback');

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

// Get Feedback by ID
export const getFeedback = id => async dispatch => {
  try {
    const res = await axios.get(`/api/feedback/${id}`);

    dispatch({
      type: GET_FEEDBACK,
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
export const addFeedback = feedback => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/feedback', feedback, config);

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

// Delete Feedback
export const deleteFeedback = id => async dispatch => {
  try {
    await axios.delete(`/api/feedback/${id}`);

    dispatch({
      type: DELETE_FEEDBACK,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: FEEDBACK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
