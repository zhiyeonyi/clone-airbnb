// 모달 테스트용

// *** 패키지 import
import React from "react";
import styled from "styled-components";

import Hbutton from "../components/Hbutton";
import { Grid, Text, Button, Input } from "../elements";

const Test = (props) => {
  return (
    <React.Fragment>
      <div>헤더 들어올 자리</div>
      <h1>서울 페이지 입니다.</h1>
      <Grid is_flex>
        <Hbutton />
      </Grid>
    </React.Fragment>
  );
};

export default Test;
