import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FeedbackList from './components/FeedbackList';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route exact path="/event/:id" component={EventDetail} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/feedback" component={FeedbackList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
