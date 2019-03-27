import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';

import dashHOC from './dashboardHOC';
import Dashboard from './dashboard';
import AuthenticatedNavTwo from '../nav/authenticatedNavTwo';

const WrappedDash = dashHOC(Dashboard);

class DashboardContainer extends Component {
  render() {
    const {
      auth,
      logoutUser,
      grabReviewInfoForEdit,
      grabReviewInfoForDelete,
      deleteReview
    } = this.props;
    console.log(deleteReview);
    console.log(grabReviewInfoForEdit);
    return (
      <div>
        <div style={{ backgroundColor: 'red' }}>
          <AuthenticatedNavTwo logout={logoutUser} avatar={auth.user.avatar} />
        </div>

        <WrappedDash
          grabReviewInfoForDelete={grabReviewInfoForDelete}
          deleteReview={deleteReview}
          grabReviewInfoForEdit={grabReviewInfoForEdit}
          user={auth.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  actions
)(DashboardContainer);
