import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../actions/eventActions';
import { useParams } from 'react-router-dom';
import FeedbackList from './FeedbackList';
import FeedbackForm from './FeedbackForm';
import FeedbackChart from './FeedbackChart'; // Import FeedbackChart

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(state => state.events.event);
  const feedbacks = useSelector(state => state.feedbacks.feedbacks);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  if (!event) return <div>Loading...</div>;

  // Transform feedback data for the chart
  const feedbackData = feedbacks.reduce((acc, feedback) => {
    const eventId = feedback.event;
    if (!acc[eventId]) {
      acc[eventId] = { event: feedback.event, count: 0 };
    }
    acc[eventId].count += 1;
    return acc;
  }, {});

  const feedbackArray = Object.values(feedbackData);

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
      <FeedbackForm />
      <FeedbackList />
      <FeedbackChart feedbacks={feedbackArray} /> {/* Add FeedbackChart */}
    </div>
  );
};

export default EventDetail;
