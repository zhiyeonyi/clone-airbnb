import React from "react";
import styled from "styled-components";
import { Button, Text } from "../elements/index";
import Logo from "../elements/Logo";
import mainimage from "../shared/images/last.png";

const MainTop = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <W>
          <a>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</a>
        </W>
        <Logo />
        <Selectbox>
          <Button width="">위치</Button>
          <Button>체크인</Button>
          <Button>체크아웃</Button>
          <Button>인원</Button>
        </Selectbox>
        <MainImage>
          <PostImage src={mainimage} alt="" />
          <Text width="40%" height="100px" color="white" font-size="80px">
            에어비앤비가 여행지를 찾아드릴게요
          </Text>
          <Button width="15%">유연한 검색</Button>
        </MainImage>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  height: 800px;
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const W = styled.div`
  text-align: center;
  text-decoration: underline;
  color: white;
`;

const Selectbox = styled.div`
  color: black;
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const MainImage = styled.div`
  width: 90%;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 500px;
`;

const PostImage = styled.img``;

export default MainTop;
