const express = require('express');
const Booking = require('../models/Booking');
const authenticate = require('../utils/authenticate');

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  const booking = new Booking({
    ...req.body,
    userId: req.userId
  });
  await booking.save();
  res.json({ message: 'Booking saved successfully' });
});

router.get('/', authenticate, async (req, res) => {
  const bookings = await Booking.find({ userId: req.userId });
  res.json(bookings);
});

module.exports = router;
