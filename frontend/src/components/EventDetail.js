import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../actions/eventActions';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(state => state.events.event);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventDetail;
