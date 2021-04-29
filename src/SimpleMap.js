import React, { Component } from 'react';
import {  GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "800px",
  width: "1000px"
}

const center = {
  lat: 0,
  lng: -180
}

const position = {
  lat: 37.772,
  lng: -122.214
}

const onLoad = marker => {
  console.log('marker: ', marker)
}


class SimpleMap extends Component {
  render() {
    return (
      <LoadScript>
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={2}
          center={center}
        >
          <Marker
            onLoad={onLoad}
            position={position}
          />
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default SimpleMap;