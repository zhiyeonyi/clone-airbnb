import React from "react";
import styled from "styled-components";
import { Button, Text } from "../elements/index";
import Logo from "../elements/Logo";

const MainTop = () => {
  return (
    <React.Fragment>
      <Wrap>
        <div className="whole">
          <div className="warning">
            <a
              style={{ color: "white" }}
              href="https://www.airbnb.co.kr/d/covidsafety"
            >
              에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
            </a>
          </div>
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
              <span>호스트되기</span>
              <button></button>
            </div>
          </MiddleWrap>

          <LastWrap>
            <div className="BigImg">
              <Text size="48px" bold color="#fff">
                에어비앤비가 <br /> 여행지를 찾아드릴게요!
              </Text>
              <Button>유연한 검색</Button>
            </div>
          </LastWrap>
        </div>
      </Wrap>
    </React.Fragment>
  );
};

export default MainTop;

const Wrap = styled.div`
  height: 100%;
  background-color: black;

  .whole {
    // width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .searchbox {
      background-color: #ffffff;
    }
  }
`;

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
    display: center;
    align-items: center;
    span {
      color: white;
      font-size: ;
    }
    button {
      margin-top: 16px !important;
      height: 30px;
      width: 100px;
      border-radius: 20px;
    }
  }
`;

const LastWrap = styled.div`
  width: 100%;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 600px;
  background-size: cover;
  margin: .BigImg {
    span {
      letter-spacing: -0.02em;
      line-height: 54px;
    }
  }
`;

// const PostImage = styled.img`
//   object-fit: cover;
//   width:90%
//   height:100%
// `;

// const LogoImage = styled.img``;
