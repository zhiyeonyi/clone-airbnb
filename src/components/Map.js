import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Googlemap = (posts) => {

  const [mapLocation, setMapLocation] = React.useState("");
  
  
  const center = {
    lat: 37.53,
    lng: 127,
  };
 
  const markerLocation = {
    lat: 37.54,
    lng: 127,
  };

  const containerStlye = {
    width: "100%",
    height: "100%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBWJ7dHELrTsWcsWBbjDVTehz0bfIQvNns">
      <GoogleMap mapContainerStyle={containerStlye} center={center} zoom={12}>
        <Marker
          position={markerLocation}
          icon={
            "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQUupw%2Fbtrn438fxqu%2FlmIbtM65r18GWDkwoldwZ1%2Fimg.png"
          }
        />

      </GoogleMap>
    </LoadScript>
  );
};

export default Googlemap;

/* AIzaSyBWJ7dHELrTsWcsWBbjDVTehz0bfIQvNns */
