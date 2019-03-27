import React, { Component } from 'react';
import API from '../../utils/API';

const searchExtender = WrappedComponent => {
  class SearchExtend extends Component {
    state = {
      selectedChain: '',
      locationInput: '',
      geolocation: {},
      locationView: ''
    };

    /* this is the function that will be passed to the submit button
       when all the information needed is gathered call will be made
       to the google places api to grab results */
    onClick = async () => {
      const { selectedChain, geolocation } = this.state;
      const { onSubmit, googlePlacesSearch } = this.props;
      const searchInfo = {
        selectedChain: selectedChain,
        geolocation: geolocation
      };

      await googlePlacesSearch(searchInfo);
      onSubmit();
    };

    /*this method will call our backend server to get geolocation 
      information if call is successful, we will then 
      update component state*/
    onGeoCodeSubmit = async () => {
      const { locationInput } = this.state;
      const data = await API.geoLocate({ locationInput: locationInput });
      const { formattedAddress, geolocation } = data.data.results;

      this.setState({
        locationView: formattedAddress,
        geolocation: geolocation
      });
    };

    /*this method will handle all input changes in search 
      component*/
    onInputChange = e => {
      e.preventDefault();
      const inputName = e.target.name;
      const inputValue = e.target.value;
      this.setState({
        [inputName]: inputValue
      });
    };
    render() {
      return (
        <WrappedComponent
          onGeoCodeSubmit={this.onGeoCodeSubmit}
          selectedChain={this.state.selectedChain}
          location={this.state.locationInput}
          locationView={this.state.locationView}
          onChange={this.onInputChange}
          onClick={this.onClick}
        />
      );
    }
  }
  return SearchExtend;
};

export default searchExtender;
