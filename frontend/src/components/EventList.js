import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div>
      <h1>Events</h1>
      {events.map(event => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
