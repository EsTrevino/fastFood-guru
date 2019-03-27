import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class Like extends Component {
  state = {
    liked: false
  };

  handleChange = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    const buttonStyle = {
      border: 'none',
      backgroundColor: 'none',
      outline: 'none',
      cursor: 'pointer',
      color: this.state.liked === false ? '#1E90FF' : 'red'
    };

    return (
      <React.Fragment>
        <button style={buttonStyle} onClick={this.handleChange}>
          <FontAwesomeIcon
            icon={this.state.liked === false ? faThumbsUp : faHeart}
          />
        </button>
        <span className="badge">3</span>
      </React.Fragment>
    );
  }
}

export default Like;
