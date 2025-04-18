const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hotelId: String,
  hotelName: String,
  checkIn: Date,
  checkOut: Date,
  roomCategory: String,
  bookedRateAUD: Number,
  rateType: String,
  bookingReference: String,
  alertsSent: [Date],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
