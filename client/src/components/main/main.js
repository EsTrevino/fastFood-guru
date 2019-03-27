import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import API from '../../utils/API';
import UnauthenticatedNav from '../nav/unauthenticatedNav';
import AuthenticatedNav from '../nav/authenticatedNav';
import CardContainer from '../cardContainer/cardContainer';
import { isLoading } from '../utilComponents/statelessFuntionalUtils';

import './main.css';

class Main extends Component {
  state = {
    results: [],
    isLoadingData: true
  };

  componentDidMount() {
    API.grabAllReviewsWithUserInfo().then(results => {
      this.setState({
        results: results.data,
        isLoadingData: false
      });
    });
  }

  render() {
    const { auth, logoutUser } = this.props;
    const { results, isLoadingData } = this.state;
    let firstName = auth.user.firstName;
    let avatar = auth.user.avatar;

    return (
      <>
        <div className="main-cont">
          {auth.isAuthenticated ? (
            <AuthenticatedNav
              firstname={firstName}
              avatar={avatar}
              logout={logoutUser}
            />
          ) : (
            <UnauthenticatedNav />
          )}
          <div className="landing">
            <div className="landing-item">
              <h1 className="text-center text-white font-weight-light">
                Fast Food Guru
              </h1>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <p className="font-weight-bold text-danger text-center">
            Recent Reviews
          </p>
          <hr />
          <div className="pb-5 mb-5">
            {isLoadingData ? isLoading() : <CardContainer reivews={results} />}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  actions
)(Main);
