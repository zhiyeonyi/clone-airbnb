// 모달 테스트용

// *** 패키지 import
import React from "react";
import styled from "styled-components";

import App from "../components/Test2";
import Hbutton from "../components/HTest";
import Hmodal from "../components/Hmodal";
import { Grid, Text, Button, Input } from "../elements";

const Test = (props) => {
  return (
    <React.Fragment>
      <div>헤더 들어올 자리</div>
      <h1>서울 페이지 입니다.</h1>
      <Grid is_flex>
        <App />
      </Grid>
    </React.Fragment>
  );
};

export default Test;
