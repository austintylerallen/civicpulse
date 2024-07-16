const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Import routes
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const feedbackRoutes = require('./routes/feedback');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
