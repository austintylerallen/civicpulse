import { 
    GET_FEEDBACKS, 
    GET_FEEDBACK, 
    FEEDBACK_ERROR, 
    ADD_FEEDBACK, 
    DELETE_FEEDBACK 
  } from '../actions/types';
  
  const initialState = {
    feedbacks: [],
    feedback: null,
    loading: true,
    error: null,
  };
  
  function feedbackReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_FEEDBACKS:
        return {
          ...state,
          feedbacks: payload,
          loading: false,
        };
      case GET_FEEDBACK:
        return {
          ...state,
          feedback: payload,
          loading: false,
        };
      case ADD_FEEDBACK:
        return {
          ...state,
          feedbacks: [payload, ...state.feedbacks],
          loading: false,
        };
      case DELETE_FEEDBACK:
        return {
          ...state,
          feedbacks: state.feedbacks.filter((feedback) => feedback._id !== payload),
          loading: false,
        };
      case FEEDBACK_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  
  export default feedbackReducer;
  