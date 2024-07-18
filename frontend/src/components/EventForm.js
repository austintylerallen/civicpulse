import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent, getEvent } from '../actions/eventActions';
import { useHistory, useParams } from 'react-router-dom';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    type: 'meeting'
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const event = useSelector(state => state.events.event);

  useEffect(() => {
    if (id) {
      dispatch(getEvent(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (event && id) {
      setFormData({
        title: event.title,
        description: event.description,
        date: new Date(event.date).toISOString().substring(0, 10),
        location: event.location,
        type: event.type
      });
    }
  }, [event, id]);

  const { title, description, date, location, type } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (id) {
      dispatch(updateEvent(id, formData));
    } else {
      dispatch(createEvent(formData));
    }
    history.push('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={onChange} required />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={description} onChange={onChange} required />
      </div>
      <div>
        <label>Date</label>
        <input type="date" name="date" value={date} onChange={onChange} required />
      </div>
      <div>
        <label>Location</label>
        <input type="text" name="location" value={location} onChange={onChange} required />
      </div>
      <div>
        <label>Type</label>
        <select name="type" value={type} onChange={onChange} required>
          <option value="meeting">Meeting</option>
          <option value="initiative">Initiative</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">{id ? 'Update Event' : 'Create Event'}</button>
    </form>
  );
};

export default EventForm;
