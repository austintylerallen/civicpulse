import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import FeedbackList from './components/FeedbackList'; // Import FeedbackList

const App = () => {
  return (
    <Router>
      <Navbar />
      <h1>Hello, CivicPulse!</h1> {/* Add this line to test basic rendering */}
      <Switch>
        <Route exact path="/" component={EventList} />
        <Route exact path="/event/:id" component={EventDetail} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/feedback" component={FeedbackList} /> {/* Add FeedbackList route */}
      </Switch>
    </Router>
  );
};

export default App;
