const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Feedback = require('../models/Feedback');
const Event = require('../models/Event');
const User = require('../models/User');

const router = express.Router();

// @route   POST api/feedback
// @desc    Add feedback to event
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('comment', 'Comment is required').not().isEmpty(),
      check('event', 'Event ID is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const event = await Event.findById(req.body.event);

      if (!event) {
        return res.status(404).json({ msg: 'Event not found' });
      }

      const newFeedback = new Feedback({
        comment: req.body.comment,
        event: req.body.event,
        user: req.user.id
      });

      const feedback = await newFeedback.save();
      res.json(feedback);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/feedback/:event_id
// @desc    Get feedback for an event
// @access  Public
router.get('/:event_id', async (req, res) => {
  try {
    const feedback = await Feedback.find({ event: req.params.event_id }).populate('user', ['name']);
    res.json(feedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
