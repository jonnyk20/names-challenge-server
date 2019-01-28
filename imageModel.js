const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: {
    type: String,
    required: 'Please enter the URL of the image',
    unique: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  source: {
    type: [
      {
        type: String,
        enum: ['pexels', 'unsplash']
      }
    ],
    required: true
  },
  details: {}
});

module.exports = {
  Male: mongoose.model('Male', ImageSchema),
  Female: mongoose.model('Female', ImageSchema)
};
