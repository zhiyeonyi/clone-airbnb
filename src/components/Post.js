// Detail.js
// *** 패키지 import
import React from "react";
import styled from "styled-components";
import { Text, Image } from "../elements";
import { AiFillStar } from "react-icons/ai";
import { FiShare,FiHeart } from "react-icons/fi";
import {AiOutlineHome} from "react-icons/ai";
import {IoSparklesOutline, IoBedOutline} from "react-icons/io5";
import {BsDoorOpen, BsBookmark} from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const { accomoId } = useParams();
  const dispatch = useDispatch()
  
  const[info, setInfo]=useState("")

  useEffect(()=> {
    axios
    .get(`http://13.209.40.227/api/place/1/list/${accomoId}`)
    .then(response => setInfo(response.data.room));
    // // .then(response=> console.log(response.data.room))
  },[]);


  return (
    <React.Fragment>
      <Wrap>
        <Header>
          <Text bold size="28px" margin="28px 0px 10px 0px">{info.accomoTitle}</Text>
          <RateLocation>
            <Text margin="0px 5px" size="15px">
              <AiFillStar color="#FF385C"/>rate 슈퍼호스트 {info.accomoAdress}</Text> 
            <Text margin="0px 5px" size="14" bold>
            <FiShare/> 공유하기 <FiHeart/> 저장
            </Text>
            </RateLocation> 
          <AccomoImg>
            <img className="acimg" style={{width: "45vw" }} src={info.accomoImg} alt="이미지"/>
          </AccomoImg>
        </Header>

        <Body>
            <div className="hostinfo">  
                <div className= "gle"> 
                    <Text bold margin="10px 0px" size="25px">PraiseCat님이 호스팅하는 공동 주택 전체</Text>
                    <Text margin="0px" size="16px">{info.accomoInfo1} </Text>
                    <Text margin="0px" size="16px">{info.accomoInfo2} </Text>

                </div>
                <Image size="70" shape="circle"src="http://www.foodnmed.com/news/photo/201903/18296_3834_4319.jpg"></Image>
            </div>

            <HowTo>
                <div className="howto">
                <AiOutlineHome size="30" margin="20px"/>
                <div className= "gle"> 
                    <Text bold margin="0px 15px" size="18px">집 전체</Text>
                    <Text margin="3px 15px" size="14px">아파트 전체를 단독으로 사용하시게 됩니다. </Text>
                </div>
                </div>
                < div className="howto">
                <IoSparklesOutline size="30" margin="20px"/>
                <div className= "gle"> 
                    <Text bold margin="0px 15px" size="18px">청결 강화</Text>
                    <Text margin="3px 15px" size="14px">에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.</Text>
                </div>
                </div>
                < div className="howto">
                <BsDoorOpen size="30" margin="20px"/>
                <div className= "gle"> 
                    <Text bold margin="0px 15px" size="18px">셀프 체크인</Text>
                    <Text margin="3px 15px" size="14px">키패드를 이용해 체크인하세요.</Text>
                </div>
                </div>
                <div className="howto">
                <BsBookmark size="30" margin="20px"/>
                <div className= "gle"> 
                    <Text bold margin="0px 15px" size="18px">무선 인터넷</Text>
                    <Text margin="3px 15px" size="14px">게스트가 자주 찾는 편의시설</Text>
                </div>
                </div>
            </HowTo>

            <Explain>
                <Text size ="16">
                    서울 홍대에 위치한 내집처럼 편안한 곳에 오신 것을 환영합니다!
                    <br/>* 지금 막 리모델링된 집, 깨끗하고 아늑한 30m² 원룸 (약7평)
                    <br/>* 유연한 체크인 및 체크 아웃 시간
                    <br/>* 홍대의 쇼핑, 유흥, 먹거리 구역까지 도보 10 분, 신촌까지 도보 20 분
                </Text>         
            </Explain>    

            <Text bold size="23px">숙박 장소</Text>
            <Bed>
                <div className="bed">
                    <IoBedOutline size="30" />
                    <div className= "gle"> 
                            <Text bold margin="14px 0px 0px 0px" size="16px">침실</Text>
                            <Text size="14px" margin="3px 0px 0px 0px">퀸사이즈 침대 1개, 요와 이불 1개</Text>
                    </div>
                </div>
            </Bed>

        </Body>
      </Wrap>

    </React.Fragment>
  );
};


const Wrap = styled.div`
  border-top: 1px solid gray
  display: flex;
  flex-direction: column;
  min-width: 80vw;
  /* min-height: 100vh;   */
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 80vw;
  height: 75vh;
  
`;

const Body = styled.div`
  width: 80vw;
  border-bottom: 0.2px solid lightgray;

  .hostinfo {
      display:flex;
      padding: 25px 0px;
      border-bottom: 0.2px solid lightgray;

  }
  
`;

const AccomoImg = styled.div`
  margin: 2vw 0;

  .acimg{
    border-radius: 20px;
`;

const HowTo = styled.div`
      border-bottom: 0.2px solid lightgray;
      padding: 32px 0px;
    .howto {
        display:flex;
        margin: 20px 10px 20px 0px;
    }
`;

const Explain = styled.div`
    padding: 32px 0px;
    border-bottom: 0.2px solid lightgray;

`;

const Bed = styled.div`
    display:flex;
    margin: 0 0 3vw 0;

    .bed{
    border: 1px solid lightgray;
    border-radius: 10px;
    padding:24px;
    }
`;
const RateLocation =styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Post;
