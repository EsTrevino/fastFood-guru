import React from 'react';
import { connect } from 'react-redux';

const ErrorDisplay = props => {
  //   console.log(props.error.error.message);

  return <div>{props.error.error.message}</div>;
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(ErrorDisplay);
