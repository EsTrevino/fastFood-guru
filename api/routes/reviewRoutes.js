const express = require('express');
const router = express.Router();
const db = require('../models/index');
const passport = require('passport');
const Review = db.Review;

//get most recent reviews
router.get('/', (req, res) => {
  Review.find({})
    .limit(15)
    .populate('user')
    .exec((err, reviews) => {
      res.status(200).json(reviews);
    });
});

//we need to take a logged in user and allow them to post a review
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { user, text, chainName, address, pictureURL, rating } = req.body;

    const newReview = new Review({
      user: user,
      text: text,
      chainName: chainName,
      address: address,
      pictureURL: pictureURL,
      rating: rating
    });

    newReview.save().then(newReview => {
      res.status(200).json(newReview);
    });
  }
);

//route to get an individual users reviews
router.get(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //in req.body will be a user id
    const { userId } = req.params;

    Review.find({ user: userId })
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        res.json({ err: err });
      });
  }
);
//we need to be able to let a user edit a review
router.put(
  '/update',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { _id } = req.body;
    Review.findByIdAndUpdate({ _id }, req.body)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        console.log(err);
      });
  }
);

//we need to be able to let a user delete a review
router.delete(
  '/delete/:reviewId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { reviewId } = req.params;

    Review.findByIdAndDelete({ _id: reviewId })
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
);

module.exports = router;
