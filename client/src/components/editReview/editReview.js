import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import Ratings from 'react-ratings-declarative';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { starRatingColor, starRatingText } from '../../utils/starRating';
import { conditionalPictureDisplay } from '../utilComponents/statelessFuntionalUtils';
import '../review/review.css';

const EditReview = props => {
  const {
    loadingPhoto,
    textInput,
    onDrop,
    reviewSubmit,
    onInputChange,
    locationToReview,
    onRatingChange,
    rating,
    uploadedPhoto
  } = props;
  const { chainName, address } = locationToReview;
  return (
    <div className="m-auto container reviewpage">
      <h3 className="text-info mt-2">{chainName}</h3>
      <p>{address}</p>
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
              value={textInput}
              name="textInput"
              onChange={onInputChange}
              className="col-11 m-auto p-2"
              autoFocus
              style={{ border: 'none', height: '175px' }}
              as="textarea"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className=" m-auto dropzone col-8">
            <div className="text-center p-3">
              {conditionalPictureDisplay(uploadedPhoto, loadingPhoto)}
              {/* {uploadedPhoto.length === 0 ? (
                'Drag photo or click below to add a new photo'
              ) : (
                <img
                  alt="uploadedPhoto"
                  height="50"
                  width="50"
                  src={uploadedPhoto}
                />
              )} */}
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
          Post Changes
        </button>
      </div>
    </div>
  );
};

export default EditReview;
