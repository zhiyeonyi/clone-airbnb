import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Modal from "react-modal"
import PostCard from "./PostCard";
import ModalOfMap from "./ModalOfMap";



const Googlemap = (posts) => {

  const [modal, setModal] = React.useState(false)
  const [Id, setId] = React.useState(1)
  
  const roomList = posts.posts
  console.log(roomList)
  const BtnOff = () => {
    setModal(false);
  }
  // 지도의 중심점
  const center = {
    lat: 37.53,
    lng: 127,
  };
  // 지도 css
  const containerStlye = {
    width: "100%",
    height: "100%",
  };

  return ( 
    <LoadScript googleMapsApiKey="AIzaSyBWJ7dHELrTsWcsWBbjDVTehz0bfIQvNns">
      <GoogleMap mapContainerStyle={containerStlye} center={center} zoom={12}>
       { roomList.map((p, idx) => {
         return (
         <Marker
         key= {idx}
         position={p.location}
         icon={
           "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbQUupw%2Fbtrn438fxqu%2FlmIbtM65r18GWDkwoldwZ1%2Fimg.png" 
          }
          onClick={() => {setId(p.accomoId); setModal(true)} }
          />        
          
       )
     })
   } 
   { modal && (<ModalOfMap Id={Id} modal={modal} BtnOff={BtnOff} posts={posts}/> )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Googlemap;