import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  lecture: {
    type: mongoose.Schema.ObjectId,
    ref: 'Lecture',
    required: [true, 'progress must belong to a lecture!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'progress must belong to a User!']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    enum:['due' , 'completed', 'ongoing'],
    default: 'due'
  }
});

const Progress = mongoose.model('Progress', progressSchema);

export default Progress;