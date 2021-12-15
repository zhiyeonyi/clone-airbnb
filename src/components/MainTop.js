import React from "react";
import { icons } from "react-icons";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Button, Text } from "../elements/index";
import Logo from "../elements/Logo";
import { HiOutlineGlobeAlt } from "react-icons/hi";

// 지연님~ 여기있던 버튼 안에 들어갈 아이콘 좀 훔쳐가겠습니다 :)
import Hbutton from "./Hbutton";

const MainTop = () => {
  return (
    <React.Fragment>
      <Wrap>
        <Whole>

          <Warning>
            <a
              style={{ color: "white" , textAlign:"center"}}
              href="https://www.airbnb.co.kr/d/covidsafety"
            >
              에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
            </a>
          </Warning>

          <MiddleWrap>
            <div className="logoimage">
              <Logo changeColor="white" />
            </div>

            <div className="middle">
              <span>숙소</span>
              <span>체험</span>
              <span>온라인 체험</span>
            </div>

            <div className="userinfo">
              <Text color="#fff">호스트 되기</Text>
              <HiOutlineGlobeAlt size="16px" padding=" 10px 12px" color="white"/>
              <Hbutton></Hbutton>
            </div>
          </MiddleWrap>

          <Navi>
            <Navigation />
          </Navi>

          <LastWrap>
            <div className="BigImg">
              <Text size="48px" bold color="#fff" center>
                에어비앤비가 <br /> 여행지를 찾아드릴게요!
              </Text>
              <Button display="flex">유연한 검색</Button>
            </div>
          </LastWrap>
        </Whole>
      </Wrap>
    </React.Fragment>
  );
};

export default MainTop;

const Wrap = styled.div`
  height: 100%;
  wight: 100%;
  background-color: black;
`

const Whole = styled.div`
  flex-direction: column;
  justify-content: center;
`;

const Navi=styled.div`
z-index:`;

const Warning= styled.div`

`

const MiddleWrap = styled.div`
  display: flex;
  justify-content: space-between;

  .middle {
    span {
      outline: none !important;
      font-size: 16px !important;
      line-height: 20px !important;
      cursor: pointer !important;
      display: inline-block !important;
      font-weight: 400 !important;
      padding: 10px 12px !important;
      pointer-events: auto !important;
      position: relative !important;
      text-align: center !important;
      z-index: 0 !important;
      color: #ffffff !important;
    }
  }

  .userinfo {
    display: flex;

    span {
      color: white;
      font-size: 16px; 
      cursor: pointer;
      font-weight: 400 !important;
      padding: 10px 12px;

  }
`;

const LastWrap = styled.div`
  display:flex;
  width: 100%;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 600px;
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  justify-content: center;
 `; 
