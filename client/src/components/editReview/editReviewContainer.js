import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import EditReview from './editReview';
import editReviewHOC from './editReviewHOC';
import AuthenticatedNavTwo from '../nav/authenticatedNavTwo';

const WrappedEditReview = editReviewHOC(EditReview);

const EditReviewContainer = props => {
  const { auth, reviewForEdit, logoutUser, updateReview } = props;
  return (
    <>
      <div style={{ backgroundColor: 'red' }}>
        <AuthenticatedNavTwo logout={logoutUser} avatar={auth.user.avatar} />
      </div>
      <WrappedEditReview
        updateReview={updateReview}
        user={auth.user}
        review={reviewForEdit}
      />
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  reviewForEdit: state.review
});

export default connect(
  mapStateToProps,
  actions
)(EditReviewContainer);
