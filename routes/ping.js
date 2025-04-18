const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    res.json({ message: 'MongoDB connection status', status: dbState });
  } catch (err) {
    res.status(500).json({ error: 'Failed to connect to MongoDB', details: err.message });
  }
});

module.exports = router;
