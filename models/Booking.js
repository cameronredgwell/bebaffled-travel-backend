const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookingRef: String,
  hotelName: String,
  roomType: String,
  checkInDate: Date,
  checkOutDate: Date,
  rateAtBookingTime: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
