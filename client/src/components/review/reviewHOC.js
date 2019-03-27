import React, { Component } from 'react';
import request from 'superagent';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_DIRECT_UPLOAD_URL
} from '../../utils/keys';

const reviewExtender = WrappedComponent => {
  class ReviewExtend extends Component {
    state = {
      rating: 0,
      textInput: '',
      cloudinaryPhotoURL: ''
    };

    onDrop = file => {
      const uploadRequest = request
        .post(CLOUDINARY_DIRECT_UPLOAD_URL)
        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        .field('file', file);

      uploadRequest.end((err, response) => {
        if (err) {
          console.log(err);
        }

        if (response.body.secure_url !== '') {
          this.setState({
            cloudinaryPhotoURL: response.body.secure_url
          });
        }
      });
    };

    onInputChange = e => {
      e.preventDefault();
      const inputName = e.target.name;
      const inputValue = e.target.value;
      this.setState({
        [inputName]: inputValue
      });
    };

    changeRating = newRating => {
      this.setState({
        rating: newRating
      });
    };

    onSubmit = () => {
      const { user, selectedLocation, createNewReview } = this.props;
      const { textInput, rating, cloudinaryPhotoURL } = this.state;
      const { userId } = user;
      const { formatted_address, name } = selectedLocation;

      const newReview = {
        user: userId,
        text: textInput,
        chainName: name,
        address: formatted_address,
        pictureURL: cloudinaryPhotoURL,
        rating: rating
      };

      createNewReview(newReview);
    };

    render() {
      const { selectedLocation, user } = this.props;
      const { cloudinaryPhotoURL, rating } = this.state;
      return (
        <WrappedComponent
          onInputChange={this.onInputChange}
          uploadedPhoto={cloudinaryPhotoURL}
          rating={rating}
          onRatingChange={this.changeRating}
          user={user}
          locationToReview={selectedLocation}
          reviewSubmit={this.onSubmit}
          onDrop={this.onDrop}
        />
      );
    }
  }

  return ReviewExtend;
};

export default reviewExtender;
