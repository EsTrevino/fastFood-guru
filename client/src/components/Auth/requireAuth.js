import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const requireAuth = WrappedComponent => {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
      const { isLoggedIn } = this.props;
      if (!isLoggedIn) {
        this.props.history.push('/auth');
      }
    }

    render() {
      return <>{this.props.isLoggedIn && <WrappedComponent />}</>;
    }
  }

  const mapStatetoProps = state => ({
    isLoggedIn: state.auth.isAuthenticated
  });

  return withRouter(connect(mapStatetoProps)(RequireAuth));
};

export default requireAuth;
