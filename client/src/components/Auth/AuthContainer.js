import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import authenticate from './AuthHOC';
import SignIn from './signUp';
import SignUp from './signIn';
import * as actions from '../../redux/actions/index';
import './AuthContainer.css';

const SignInForm = authenticate(SignIn);
const SignUpForm = authenticate(SignUp);

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccess: true
    };
  }

  toggleForm = () => {
    this.setState({
      userAccess: !this.state.userAccess
    });
  };

  render() {
    const { signInUser, signUpUser } = this.props;
    return (
      <div>
        <Navbar className="justify-content-center auth-nav mb-5 p-4">
          <Navbar.Brand className="text-white">Fast Food Guru</Navbar.Brand>
        </Navbar>
        <div className="container pt-5 auth-container">
          <div className="row p-5 justify-content-center">
            {this.state.userAccess ? (
              <h3 className="text-center">Register</h3>
            ) : (
              <h3 className="text-center">Login</h3>
            )}
          </div>
          <div className="row">
            <div className="text-center col-lg-6 p-3">
              <img
                alt="auth pic"
                className=""
                src={require('../../assets/signup_illustration.png')}
              />
            </div>
            <div className="text-center col-lg-6 p-3">
              {this.state.userAccess ? (
                <SignInForm
                  onSubmit={signUpUser}
                  showSignIn={this.toggleForm}
                />
              ) : (
                <SignUpForm
                  onSubmit={signInUser}
                  showSignUp={this.toggleForm}
                />
              )}
            </div>
          </div>
        </div>
      </div>
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
)(Authentication);
