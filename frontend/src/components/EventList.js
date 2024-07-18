import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const { eventList, loading, error } = events;

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.msg}</div>;
  }

  return (
    <div>
      <h1>Event List</h1>
      {eventList.length === 0 ? (
        <div>No events available.</div>
      ) : (
        <ul>
          {eventList.map(event => (
            <li key={event._id}>{event.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
