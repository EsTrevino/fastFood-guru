import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import Ratings from 'react-ratings-declarative';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { starRatingColor, starRatingText } from '../../utils/starRating';
import { conditionalPictureDisplay } from '../utilComponents/statelessFuntionalUtils';
import './review.css';

const Review = props => {
  const {
    loadingPhoto,
    onDrop,
    reviewSubmit,
    onInputChange,
    locationToReview,
    user,
    onRatingChange,
    rating,
    uploadedPhoto
  } = props;
  const { name, formatted_address } = locationToReview;
  const { firstName } = user;
  return (
    <div className="m-auto container reviewpage">
      <h3 className="text-info mt-2">{name}</h3>
      <p>{formatted_address}</p>
      <div className="review-container">
        <div className="row">
          <div className="container ml-4 mb-2 p-4">
            <Ratings changeRating={onRatingChange} rating={rating}>
              <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
              <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
              <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
              <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
              <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
            </Ratings>
            <span className="mt-5 pt-5 ml-4">
              {rating === 0 ? 'Select your rating' : starRatingText(rating)}
            </span>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12">
            <Form.Control
              name="textInput"
              onChange={onInputChange}
              className="col-11 m-auto p-2"
              autoFocus
              style={{ border: 'none', height: '175px' }}
              placeholder={`Tell us what you think about the ${name} at this location ${firstName}...`}
              as="textarea"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className=" m-auto dropzone col-8">
            <div className="text-center p-3">
              {conditionalPictureDisplay(uploadedPhoto, loadingPhoto)}
            </div>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={acceptedFiles => onDrop(acceptedFiles)}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  className="text-center pb-2"
                  {...getRootProps()}
                  variant="secondary"
                >
                  <Button className="btn-secondary">
                    Select Photo{'  '}
                    <FontAwesomeIcon icon={faCamera} />
                  </Button>

                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
          </div>
        </div>
      </div>
      <div className="row mt-4 pt-3 col-12 photo-container mt-1">
        <button onClick={reviewSubmit} className="btn btn-danger btn-lg">
          Post Review
        </button>
      </div>
    </div>
  );
};

export default Review;
