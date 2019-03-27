import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import Search from '../SearchComponent/search';
import searchHOC from '../SearchComponent/searchHOC';
import Results from '../results/resultsComponent';
import resultsHOC from '../results/resultsHOC';
import Review from '../review/review';
import reviewHOC from '../review/reviewHOC';
import AuthenticatedNavTwo from '../nav/authenticatedNavTwo';

const WrappedSearch = searchHOC(Search);
const WrappedResults = resultsHOC(Results);
const WrappedReview = reviewHOC(Review);

class ReviewContainer extends Component {
  state = {
    displaySearch: true,
    displayResults: false,
    displayReview: false
  };

  searchSubmit = () => {
    this.setState({
      displaySearch: false,
      displayResults: true,
      displayReview: false
    });
  };

  locationSelect = () => {
    this.setState({
      displaySearch: false,
      displayResults: false,
      displayReview: true
    });
  };

  render() {
    const {
      googlePlacesSearch,
      selectLocation,
      auth,
      logoutUser,
      search,
      createNewReview
    } = this.props;

    return (
      <div>
        <div style={{ backgroundColor: 'red' }}>
          <AuthenticatedNavTwo logout={logoutUser} avatar={auth.user.avatar} />
        </div>

        {this.state.displaySearch && (
          <WrappedSearch
            googlePlacesSearch={googlePlacesSearch}
            onSubmit={this.searchSubmit}
          />
        )}

        {this.state.displayResults && (
          <WrappedResults
            userGeo={auth.userGeo}
            searchResults={search}
            reduxSelectLocation={selectLocation}
            onLocationSelect={this.locationSelect}
          />
        )}

        {this.state.displayReview && (
          <WrappedReview
            user={auth.user}
            createNewReview={createNewReview}
            selectedLocation={search.location}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  actions
)(ReviewContainer);
