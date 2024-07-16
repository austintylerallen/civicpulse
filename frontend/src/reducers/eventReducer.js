import { GET_EVENTS, EVENTS_ERROR, GET_EVENT } from '../actions/types';

const initialState = {
  events: [],
  event: null,
  loading: true,
  error: null,
};

function eventReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false,
      };
    case GET_EVENT:
      return {
        ...state,
        event: payload,
        loading: false,
      };
    case EVENTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default eventReducer;
