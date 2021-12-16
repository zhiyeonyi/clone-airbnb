// Seoul.js 

// *** 패키지 import
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { actionCreators as postActions} from "../redux/modules/post";
// import Navigation from "../components/Navigation";
import testImg from "../shared/images/redHeart.png";
import Trophy from "../shared/images/trophy.svg";
import BtnToBt from "../shared/images/btnToBottom.svg";
import Filter from "../shared/images/filter.svg";
import PostCard from "../components/PostCard";
import Map from "../components/Map";
import axios from "axios";

const Seoul = () => {
  const dispatch = useDispatch();
  const[posts,setPosts]=useState([]);

  useEffect(()=> {
    dispatch(postActions.getPostListDB());
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Header>
          <NaviPlace>{/* <Navigation /> */}</NaviPlace>
          <BtnPlace>
            <HeaderBtn>
              요금
              <ButnToBt src={BtnToBt} alt="" />
            </HeaderBtn>
            <HeaderBtn style={{ width: "8.3em" }}>
              숙소 유형
              <ButnToBt src={BtnToBt} alt="" />
            </HeaderBtn>
            <p style={{ fontSize: "18px", color: "#DDDDDD" }}>ㅣ</p>
            <HeaderBtn style={{ width: "10em" }}>취소 수수료 없음</HeaderBtn>
            <HeaderBtn style={{ width: "7.8em" }}>수변에 인접</HeaderBtn>
            <HeaderBtn style={{ width: "4.7em" }}>주방</HeaderBtn>
            <HeaderBtn style={{ width: "7.8em" }}>무선 인터넷</HeaderBtn>
            <HeaderBtn style={{ width: "5.5em" }}>선풍기</HeaderBtn>
            <HeaderBtn style={{ width: "5.5em" }}>에어컨</HeaderBtn>
            <HeaderBtn style={{ width: "9em" }}>무료 주차 공간</HeaderBtn>
            <HeaderBtn style={{ width: "7.8em" }}>셀프 체크인</HeaderBtn>
            <HeaderBtn style={{ width: "9em" }}>업무 전용 공간</HeaderBtn>
            <HeaderBtn style={{ width: "5.5em" }}>건조기</HeaderBtn>
            <HeaderBtn>
              <ButnToBt
                src={Filter}
                alt=""
                style={{ marginLeft: "0px", marginRight: "6px" }}
              />
              필터
            </HeaderBtn>
          </BtnPlace>
        </Header>
        <ListMap>
          <List>
            <Textarea>
              <Fixedtxt style={{ marginTop: "24px" }}>
                지도에 표시된 지역에 위치한 300개 이상의 숙소
              </Fixedtxt>
            </Textarea>
            <Textarea>
              <p style={{ marginTop: "10px", fontSize: "14px", color: "gray" }}>
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
                있습니다.
              </p>
            </Textarea>
            <Textarea>
              <TrophyIcon src={Trophy} alt="" />
              <Fixedtxt style={{ marginLeft: "12px", marginTop: "6px" }}>
                390,000명의 게스트가 서울의 숙소에 머물렀습니다. 게스트는
                평균적으로 이 숙소를 별 5개 만점에 4.7점으로 평가했습니다.
              </Fixedtxt>
            </Textarea>
            {posts.map((post,index)=> (
              <PostCard key={index}/>
            ))} 
            
          </List>
          <MapBox><Map/></MapBox>
        </ListMap>
      </Container>
    </React.Fragment>
  );
};

// 내 맵 API 키 : AIzaSyBWJ7dHELrTsWcsWBbjDVTehz0bfIQvNns
{
  /* <img src={testImg} className='App-logo' alt='' /> */
}

// background-image: url(${twitter_logo_small});
// background-size: cover;
// background-repeat: no-repeat;
//  background-position: center;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background-color: white;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100vw;
  height: 20vh;
  border-bottom: 0.1px solid #dddddd;
  box-sizing: border-box;
`;

const NaviPlace = styled.div`
  width: 100vw;
  height: 8vh;
`;
const BtnPlace = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
`;

const ListMap = styled.div`
  flex-direction: row;
  display: flex;
  /* display: flex-start; */
  width: 100vw;
  height: 80vh;
  background-color: yellow;
`;

const List = styled.div`
  width: 55vw;
  height: 80vh;
  background-color: white;
`;

const MapBox = styled.div`
  width: 45vw;
  height: 80vh;
  /* background-color: black;
  background-image: url(${testImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
`;

const Textarea = styled.div`
  margin: 4px 100px 0px 26px;
  display: flex;
`;

const Fixedtxt = styled.p`
  font-size: 14px;
`;

const TrophyIcon = styled.img`
  margin-top: 15px;
  width: 27px;
  height: 27px;
`;

const ButnToBt = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 6px;
`;

const HeaderBtn = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  outline: none;
  margin: 0px;
  border-radius: 30px;
  color: rgb(34, 34, 34);
  position: relative;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 16px;
  width: 6em;
  height: 2.8em;
`;

export default Seoul;
