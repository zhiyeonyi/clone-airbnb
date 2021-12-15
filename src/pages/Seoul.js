// Seoul.js

// *** 패키지 import
import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import testImg from "../shared/images/redHeart.png";
import { Text, Button, Input } from "../elements";

const Seoul = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>헤더가 들어갈 부분</Header>
        <ListMap>
          <List>리스트 나누기</List>
          <Map></Map>
        </ListMap>
      </Container>
    </React.Fragment>
  );
};

{/* <img src={testImg} className='App-logo' alt='' /> */}

// background-image: url(${twitter_logo_small}); 
// background-size: cover; 
// background-repeat: no-repeat;
//  background-position: center;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100vw;
  height: 20vh;
  background-color: green;
`;

const ListMap = styled.div`
flex-direction : row;
display:flex;
/* display: flex-start; */
  width: 100vw;
  height: 80vh;
  background-color: yellow;
`;

const List = styled.div`
  width: 55vw;
  height: 100vh;
  background-color: white;
`;

const Map = styled.div`
  width: 45vw;
  height: 100vh;
  background-color: black;
  background-image: url(${testImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Seoul;
