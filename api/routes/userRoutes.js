const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/keys');
const db = require('../models/index');
const User = db.User;

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.post('/register', (req, res) => {
  const { firstName, lastName, email, password, city, state } = req.body;
  const avatar = gravatar.url(email, {
    s: '200', //size
    r: 'pg', // rating
    d: 'mm' //default
  });
  const secret = config.secretOrKey;

  console.log('secret', secret);

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      let newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
        avatar: avatar,
        city: city,
        state: state
      });

      newUser
        .save()
        .then(createdUser => {
          let payload = {
            userId: createdUser._id,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            city: createdUser.city,
            state: createdUser.state,
            avatar: createdUser.avatar,
            createdAt: createdUser.createdAt
          };

          jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
            if (err) {
              console.log(err);
            }
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          });
        })
        .catch(err => {
          res.json({
            error: 'here'
          });
        });
    });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const secret = config.secretOrKey;

  User.findOne({ email: email })
    .then(user => {
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              userId: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              city: user.city,
              state: user.state,
              avatar: user.avatar,
              createdAt: user.createdAt
            };
            jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            });
          } else {
            res.status(401).json({ message: 'invalid password' });
          }
        })
        .catch(err => {
          res.status(401).json({
            error: 'Invalid email or password'
          });
        });
    })
    .catch(err => {
      res.status(500).json({ message: 'invalid email' });
    });
});

module.exports = router;
