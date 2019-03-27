import React from 'react';
import { Card } from 'react-bootstrap';
import Like from '../utilComponents/like';
import Ratings from 'react-ratings-declarative';
import { starRatingColor } from '../../utils/starRating';
import './card.css';

const CardHolder = props => {
  const { address, chainName, pictureURL, rating, text, user } = props.review;
  const { avatar, firstName, lastName } = user;
  return (
    <>
      <Card>
        <div className="row container m-auto pt-2">
          <div className="p-1 image-holder">
            <img alt="user-avatar" src={avatar} />
          </div>

          <div className="p-1 text-cont">
            <div className="row">
              <span className="font-weight-bold text-info text-holder">
                {`${firstName} ${lastName}`}
              </span>
            </div>
            <div className="row text-holder">
              <span>Wrote a review</span>
            </div>
          </div>
        </div>

        <Card.Body>
          <div className="feed">
            {pictureURL.length === 0 ? (
              <img
                alt="resturant"
                className="m-auto"
                src={require('../../assets/oliver-sjostrom-636186-unsplash.jpg')}
              />
            ) : (
              <img
                style={{ width: 100, height: 'auto' }}
                alt="resturant"
                className="m-auto"
                src={pictureURL}
              />
            )}
            <p className="font-weight-bold text-info mt-3">{chainName}</p>
            <p>{address}</p>
            <hr />
            <div className="review-holder">
              <Ratings starDimension="0px" starSpacing="0px" rating={rating}>
                <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
                <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
                <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
                <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
                <Ratings.Widget widgetRatedColor={starRatingColor(rating)} />
              </Ratings>

              <p className="mt-2" style={{ textOverflow: 'ellipsis' }}>
                <span className="text-info">Review: </span>
                {text}
              </p>
            </div>
            <div className="mt-2">
              <Like />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardHolder;
