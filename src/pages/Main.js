import React from "react";
import styled from "styled-components";
import MainTop from "../components/MainTop";
import { useState } from "react";

const Main = () => {
  return (
    <React.Fragment>
      <Wrap>
        <MainTop />
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default Main;
