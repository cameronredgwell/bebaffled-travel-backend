const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'BeBaffled backend is live!' });
});

module.exports = router;
