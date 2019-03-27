const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    text: {
      type: String,
      required: true
    },
    chainName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    pictureURL: {
      type: String
    },
    rating: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
