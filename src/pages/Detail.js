// Detail.js
// *** 패키지 import
import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const Detail = (props) => {
  return (
    <React.Fragment>
        <Test>
        <Navigation/>
        <Post/>
        <CommentWrite/>
        <CommentList/>
      </Test>
    </React.Fragment>
  );
};

const Test = styled.div`
  padding: 0 11vw;
`;


export default Detail;
