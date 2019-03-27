import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthenticatedNavTwo from '../nav/authenticatedNavTwo';
import * as actions from '../../redux/actions/index';
import Ratings from 'react-ratings-declarative';
import { starRatingColor } from '../../utils/starRating';

const DeleteReview = props => {
  const { review, auth, deleteReview, logoutUser } = props;
  const { address, chainName, rating, text } = review;
  const { firstName, avatar } = auth.user;

  return (
    <div>
      <div style={{ backgroundColor: 'red' }}>
        <AuthenticatedNavTwo logout={logoutUser} avatar={avatar} />
      </div>
      <div className="container mt-5 card">
        <div className="row mt-5">
          <div className="container">
            <div>
              <span className="text-info">Chain Name: </span>{' '}
              <span className="pl-2">{chainName}</span>
            </div>
            <div className="pt-2">
              <span className="text-info">Location: </span>{' '}
              <span className="pl-2">{address}</span>
            </div>
            <div className="pt-2">
              <span className="text-info">Rating: </span>{' '}
              <span className="pl-2">
                {
                  <Ratings
                    starDimension="0px"
                    starSpacing="0px"
                    rating={rating}
                  >
                    <Ratings.Widget
                      widgetRatedColor={starRatingColor(rating)}
                    />
                    <Ratings.Widget
                      widgetRatedColor={starRatingColor(rating)}
                    />
                    <Ratings.Widget
                      widgetRatedColor={starRatingColor(rating)}
                    />
                    <Ratings.Widget
                      widgetRatedColor={starRatingColor(rating)}
                    />
                    <Ratings.Widget
                      widgetRatedColor={starRatingColor(rating)}
                    />
                  </Ratings>
                }
              </span>
            </div>
            <div className="pt-2">
              <span className="text-info">Review: </span>{' '}
              <span className="pl-2">{text}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            className="col-12"
          >
            <p className="text-center mr-3 pt-3">Are you sure {firstName}?</p>
            <button
              onClick={() => deleteReview(review._id)}
              className="btn btn-light"
            >
              Yes
            </button>
            <Link to="/dashboard">
              <span className="btn btn-light">No</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  review: state.review
});

export default connect(
  mapStateToProps,
  actions
)(DeleteReview);
