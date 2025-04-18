const express = require('express');
const User = require('../models/User');
const authenticate = require('../utils/authenticate');

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ name: user.name, email: user.email, accorMemberNumber: user.accorMemberNumber });
});

router.put('/', authenticate, async (req, res) => {
  const { accorMemberNumber } = req.body;
  await User.findByIdAndUpdate(req.userId, { accorMemberNumber });
  res.json({ message: 'Profile updated' });
});

module.exports = router;
