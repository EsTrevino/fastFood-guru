import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { MAP_KEY } from '../../utils/keys';

const Map = compose(
  withProps({
    googleMapURL: MAP_KEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { userGeo, activeMarker } = props;
  return (
    <GoogleMap defaultZoom={10} defaultCenter={userGeo}>
      <Marker position={activeMarker} />
    </GoogleMap>
  );
});

export default Map;
