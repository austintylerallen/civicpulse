import { GET_EVENTS, EVENTS_ERROR, GET_EVENT, CREATE_EVENT, UPDATE_EVENT } from '../actions/types';

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
    case CREATE_EVENT:
      return {
        ...state,
        events: [payload, ...state.events],
        loading: false,
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event => (event._id === payload._id ? payload : event)),
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
