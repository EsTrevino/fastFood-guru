import React, { Component } from 'react';
import API from '../../utils/API';

const dashExtender = WrappedComponent => {
  class DashExtend extends Component {
    state = {
      userReviewHistory: []
    };

    componentDidMount() {
      const userId = this.props.user.userId;
      API.getAllUserReviews(userId).then(results => {
        const { data } = results;
        this.setState({
          userReviewHistory: data
        });
      });
    }

    render() {
      const {
        user,
        grabReviewInfoForEdit,
        grabReviewInfoForDelete,
        deleteReview
      } = this.props;
      const { userReviewHistory } = this.state;
      return (
        <WrappedComponent
          deleteReview={deleteReview}
          grabReviewInfoForDelete={grabReviewInfoForDelete}
          grabReviewInfoForEdit={grabReviewInfoForEdit}
          totalReviewNumber={userReviewHistory.length}
          userReviewHistory={userReviewHistory}
          user={user}
        />
      );
    }
  }

  return DashExtend;
};

export default dashExtender;
