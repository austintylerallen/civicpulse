import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacks } from '../actions/feedbackActions';
import { useParams } from 'react-router-dom';

const FeedbackList = () => {
  const { id: event_id } = useParams();
  const dispatch = useDispatch();
  const feedbacks = useSelector(state => state.feedbacks.feedbacks);

  useEffect(() => {
    dispatch(getFeedbacks(event_id));
  }, [dispatch, event_id]);

  return (
    <div>
      <h1>Feedback</h1>
      {feedbacks.map(feedback => (
        <div key={feedback._id}>
          <h3>{feedback.user.name}</h3>
          <p>{feedback.comment}</p>
          <p>{new Date(feedback.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
