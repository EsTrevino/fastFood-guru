import React from 'react';
import {
  showSearchButton,
  GeolocationButton
} from '../utilComponents/statelessFuntionalUtils';
import { Form, Button } from 'react-bootstrap';
import './search.css';

const Search = props => {
  const {
    location,
    locationView,
    selectedChain,
    onChange,
    onClick,
    onGeoCodeSubmit
  } = props;

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6">
          <h5>Select a chain</h5>
          <Form>
            <div className="row p-3">
              {' '}
              <Button
                block
                size="lg"
                name="selectedChain"
                value="McDonalds"
                className="btn-light"
                onClick={onChange}
              >
                McDonalds{'      '}
                <span>
                  <img
                    alt="logo"
                    width="25"
                    height="25"
                    src={require('../../assets/900px-McDonalds_logo.svg.png')}
                  />
                </span>
              </Button>
            </div>
            <div className="row p-3">
              {' '}
              <Button
                block
                size="lg"
                name="selectedChain"
                value="Burger King"
                className="btn-light"
                onClick={onChange}
              >
                Burger King{' '}
                <span>
                  <img
                    alt="logo"
                    width="25"
                    height="25"
                    src={require('../../assets/1024px-Burger_King_Logo.svg.png')}
                  />
                </span>
              </Button>
            </div>
            <div className="row p-3">
              <Button
                block
                size="lg"
                name="selectedChain"
                value="Taco Bell"
                className="btn-light"
                onClick={onChange}
              >
                Taco Bell{' '}
                <span>
                  <img
                    alt="logo"
                    width="25"
                    height="25"
                    src={require('../../assets/taco-bell-1-logo-png-transparent.png')}
                  />
                </span>
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-md-6">
          <div className="chainBox">
            <h5 className="text-center align-middle font-italic text-info ">
              {selectedChain.length > 0 ? selectedChain : ''}
            </h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 searchInputBox p-5">
          <input
            name="locationInput"
            onChange={onChange}
            className="form-control mb-2"
            placeholder="Enter 5 digit zip code"
          />
          {GeolocationButton(location, selectedChain, onGeoCodeSubmit)}
        </div>
        <div className="col-md-6">
          <div className="chainBox">
            <h5 className="text-center align-middle font-italic text-info ">
              {locationView}
            </h5>
          </div>
        </div>
      </div>
      <div className="row searchSubmitBox">
        <div className="innerSearchBox col-10 m-auto p-3">
          {showSearchButton(locationView, selectedChain, onClick)}
        </div>
      </div>
    </div>
  );
};

export default Search;
