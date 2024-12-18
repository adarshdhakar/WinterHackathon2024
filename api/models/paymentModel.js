const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  lecture: {
    type: mongoose.Schema.ObjectId,
    ref: 'Lecture',
    required: [true, 'payment must belong to a lecture!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'payment must belong to a User!']
  },
  price: {
    type: Number,
    require: [true, 'payment must have a price.']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  paid: {
    type: Boolean,
    default: true
  }
});


const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
