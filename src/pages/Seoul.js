// Seoul.js

// *** 패키지 import
import React from "react";
import styled from "styled-components";

import testImg from "../shared/images/redHeart.png";
import { Grid, Text, Button, Input } from "../elements";

const Seoul = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Header>헤더가 들어갈 부분</Header>
        <ListMap>
          <List></List>
          <Map src={testImg}></Map>
        </ListMap>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: black;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  height: 20%;
  background-color: green;
`;

const ListMap = styled.div`
  width: 100%;
  height: 80%;
  background-color: yellow;
`;

const List = styled.div`
  width: 55%;
`;

const Map = styled.image`
  width: 45%;
`;

export default Seoul;
