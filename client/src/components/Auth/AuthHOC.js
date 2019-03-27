import React, { Component } from 'react';

const authenticate = WrappedComponent => {
  class Authenticate extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    OnInputChange = e => {
      e.preventDefault();
      let inputName = e.target.name;
      let inputValue = e.target.value;
      this.setState({
        [inputName]: inputValue
      });
    };

    Submit = e => {
      this.props.onSubmit(this.state);
    };

    render() {
      const { onSubmit, ...otherProps } = this.props;
      return (
        <WrappedComponent
          onChange={this.OnInputChange}
          onSubmit={this.Submit}
          {...otherProps}
        />
      );
    }
  }
  return Authenticate;
};

export default authenticate;
