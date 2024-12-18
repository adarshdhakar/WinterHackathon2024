const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, 'lecture must have a name!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'lecture must belong to a User!']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  resource :{
    type : mongoose.Schema.ObjectId,
    required : [true,'lecture must have resources!']
  }
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
