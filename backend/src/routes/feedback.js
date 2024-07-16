const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();
const auth = require('../middleware/auth');

// Submit feedback
router.post('/', auth, async (req, res) => {
  const { event, content } = req.body;

  try {
    const feedback = new Feedback({
      user: req.user.id,
      event,
      content
    });

    await feedback.save();
    res.json(feedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get feedback for an event
router.get('/event/:eventId', async (req, res) => {
  try {
    const feedback = await Feedback.find({ event: req.params.eventId }).populate('user', 'name');
    res.json(feedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
