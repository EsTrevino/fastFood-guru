import React, { Component } from 'react';
import request from 'superagent';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_DIRECT_UPLOAD_URL
} from '../../utils/keys';

const editReviewExtender = WrappedComponent => {
  class EditReviewExtend extends Component {
    state = {
      rating: 0,
      textInput: '',
      cloudinaryPhotoURL: ''
    };

    componentDidMount() {
      const { rating, pictureURL, text } = this.props.review;
      this.setState({
        rating: rating,
        textInput: text,
        cloudinaryPhotoURL: pictureURL
      });
    }

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
      const { user, review, updateReview } = this.props;
      const { textInput, rating, cloudinaryPhotoURL } = this.state;
      const { userId } = user;
      const { chainName, address, _id } = review;

      const updatedReview = {
        _id: _id,
        user: userId,
        text: textInput,
        chainName: chainName,
        address: address,
        pictureURL: cloudinaryPhotoURL,
        rating: rating
      };

      updateReview(updatedReview);
    };

    render() {
      const { review } = this.props;
      const { cloudinaryPhotoURL, rating, textInput } = this.state;
      return (
        <WrappedComponent
          textInput={textInput}
          onInputChange={this.onInputChange}
          uploadedPhoto={cloudinaryPhotoURL}
          rating={rating}
          onRatingChange={this.changeRating}
          locationToReview={review}
          reviewSubmit={this.onSubmit}
          onDrop={this.onDrop}
        />
      );
    }
  }

  return EditReviewExtend;
};

export default editReviewExtender;
