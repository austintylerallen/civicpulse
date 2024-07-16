import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import eventReducer from './reducers/eventReducer';
import feedbackReducer from './reducers/feedbackReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  feedback: feedbackReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
