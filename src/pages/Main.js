import React from "react";
import styled from "styled-components";
import MainTop from "../components/MainTop";
import LocalCtgr from "../components/LocalCtgr";

const Main = () => {
  return (
    <React.Fragment>
      <Wrap>
        <MainTop />
        <LocalCtgr />
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  justify-content: center;
  flex-direction: column;
  display: center;
  height: 100%;
`;

export default Main;
