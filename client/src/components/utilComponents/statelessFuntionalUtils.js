import React from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearchLocation,
  faLocationArrow,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

export function showSearchButton(locationView, selectedChain, onClick) {
  if (locationView.length > 0 && selectedChain.length > 0) {
    return (
      <button onClick={onClick} className="btn btn-lg btn-danger">
        Get My Locations{'  '}
        <span>
          <FontAwesomeIcon icon={faSearchLocation} />
        </span>
      </button>
    );
  } else {
    return null;
  }
}

export function GeolocationButton(location, selectedChain, onGeoCodeSubmit) {
  if (location.length > 4 && selectedChain.length > 0) {
    return (
      <button onClick={onGeoCodeSubmit} className="btn btn-success">
        Get Location{' '}
        <span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </span>
      </button>
    );
  } else {
    return (
      <button disabled className="btn btn-light">
        Get Location{' '}
        <span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </span>
      </button>
    );
  }
}

export function displayWrappedResults(
  activeMarker,
  onTableHover,
  locationSelect,
  locations,
  userGeo,
  WrappedComponent
) {
  if (userGeo === undefined) {
    return (
      <div
        style={{
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <Loader
            className="p-5"
            type="Bars"
            color="#FF0000"
            height="200"
            width="200"
          />
        </div>
      </div>
    );
  } else {
    return (
      <WrappedComponent
        activeMarker={activeMarker}
        onTableHover={onTableHover}
        onLocationSelect={locationSelect}
        locations={locations}
        userGeo={userGeo}
      />
    );
  }
}

export function isLoading() {
  return (
    <>
      <Loader
        className="p-5"
        type="Bars"
        color="#FF0000"
        height="200"
        width="200"
      />
    </>
  );
}

export function dashboardConditionalDisplay(
  userReviewHistory,
  Table,
  firstName,
  grabReviewInfoForEdit,
  grabReviewInfoForDelete,
  deleteReview
) {
  if (userReviewHistory.length === 0) {
    return (
      <>
        <h3 style={{ marginTop: '100px' }} className="text-center">
          {firstName}... you dont have any reviews, click below to start one
        </h3>
        <div
          className="p-5"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Link to="/review">
            <p>
              New Review{' '}
              <span>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </p>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h5 className="text-center p-3">My Reviews</h5>
        <Table
          grabReviewInfoForDelete={grabReviewInfoForDelete}
          deleteReview={deleteReview}
          grabReviewInfoForEdit={grabReviewInfoForEdit}
          reviewHistory={userReviewHistory}
        />
      </>
    );
  }
}

// export function cardConditionalRender(reviews, CardHolder, CardColumns) {
//   if (reviews.length === 0) {
//     return <>{isLoading()}</>;
//   } else {
//     return (
//       <>
//         <CardColumns>
//           {reviews.map(review => (
//             <CardHolder review={review} />
//           ))}
//         </CardColumns>
//       </>
//     );
//   }
// }
