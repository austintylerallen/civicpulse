import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import feedbackReducer from './feedbackReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  events: eventReducer,
  feedbacks: feedbackReducer,
  profile: profileReducer
});
