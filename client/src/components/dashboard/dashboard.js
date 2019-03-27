import React from 'react';
import Table from './Table';
import { dashboardConditionalDisplay } from '../utilComponents/statelessFuntionalUtils';
import './dashboard.css';

const Dashboard = props => {
  const {
    user,
    userReviewHistory,
    totalReviewNumber,
    grabReviewInfoForEdit,
    grabReviewInfoForDelete,
    deleteReview
  } = props;
  const { firstName, city, state, createdAt } = user;

  return (
    <>
      <div className="dashContainer m-auto">
        <h3 className="pt-5 pb-3">{firstName}'s Dashboard</h3>

        <h5 className="text-info">Account Information</h5>
        <p>Member since {createdAt.split('-')[0]}</p>
        <p>
          {city}, {state}
        </p>
        {totalReviewNumber === 1 ? (
          <>
            <p>
              {' '}
              <span
                style={{ fontSize: '16px' }}
                className="badge badge-secondary mr-2"
              >
                {totalReviewNumber}
              </span>{' '}
              Review
            </p>
          </>
        ) : (
          <>
            <p>
              <span
                style={{ fontSize: '16px' }}
                className="badge badge-secondary mr-1"
              >
                {totalReviewNumber}
              </span>{' '}
              Reviews
            </p>
          </>
        )}

        <div className="button-box btn-group pt-3 pb-3" role="group">
          <button type="button" className="btn btn-light">
            Edit Profile
          </button>
          <button type="button" className="btn btn-danger">
            Delete Profile
          </button>
        </div>

        <div className="col-12">
          {dashboardConditionalDisplay(
            userReviewHistory,
            Table,
            firstName,
            grabReviewInfoForEdit,
            grabReviewInfoForDelete,
            deleteReview
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
