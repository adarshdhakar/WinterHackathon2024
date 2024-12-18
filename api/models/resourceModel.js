const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  lecture: {
    type: mongoose.Schema.ObjectId,
    ref: 'Lecture',
    required: [true, 'resource must belong to a lecture!']
  },
  document : {
    type : [String],
    required : [true, 'resource must habe documents']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
