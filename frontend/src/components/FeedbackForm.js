import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../actions/feedbackActions';
import { useParams } from 'react-router-dom';

const FeedbackForm = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { event_id } = useParams();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addFeedback({ event: event_id, comment }));
    setComment('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Comment</label>
        <textarea
          name="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
