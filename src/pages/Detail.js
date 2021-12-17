// Detail.js
// *** 패키지 import
import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Post from "../components/Post";
import CommendWrite from "../components/CommentWrite";


const Detail = (props) => {
  return (
    <React.Fragment>
      <Navigation/>
      <Post/>
      <CommendWrite/>
    </React.Fragment>
  );
};

const Test = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: skyblue;
`;


export default Detail;
