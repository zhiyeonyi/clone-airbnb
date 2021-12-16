import React from "react";
import styled from "styled-components";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

const Map = (props) => {
  const center = {
    lat: 37.54,
    lng: 127.04,
  };
  
  return (
    <LoadScript 
      googleMapsApiKey="AIzaSyBWJ7dHELrTsWcsWBbjDVTehz0bfIQvNns"
      >
        <GoogleMap
          // mapContainerStyle={}
          center={center}
          zoom={8}
          >
            
        </GoogleMap>
    </LoadScript>
  )
}


export default Map;

/* AIzaSyBWJ7dHELrTsWcsWBbjDVTehz0bfIQvNns */