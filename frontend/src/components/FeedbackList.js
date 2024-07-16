import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacks } from '../actions/feedbackActions';

const FeedbackList = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector(state => state.feedbacks.feedbacks);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  return (
    <div>
      <h1>Feedback</h1>
      {feedbacks.map(feedback => (
        <div key={feedback._id}>
          <h2>{feedback.title}</h2>
          <p>{feedback.comment}</p>
          <p>{new Date(feedback.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
