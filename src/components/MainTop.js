import React from "react";
import { icons } from "react-icons";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Button, Text,Image } from "../elements/index";
import Logo from "../elements/Logo";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


// 지연님~ 여기있던 버튼 안에 들어갈 아이콘 좀 훔쳐가겠습니다 :)
import Hbutton from "./Hbutton";

const MainTop = () => {
  const history = useHistory()
  const [scrollY, setScrollY] = useState(0)
  const handleFollow = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(()=> {
    scrollY>50 &&console.log('50보다 밑으로~')
  }, [scrollY]);

  useEffect(()=> {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <React.Fragment>
      <Total>
      <FirstWrap>
        <Whole>
          {scrollY <50? (
          <div >
            <Warning>
              <a
                style={{ color: "white" , textAlign:"center"}}
                href="https://www.airbnb.co.kr/d/covidsafety"
              >
                에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
              </a>
            </Warning>

            <MiddleWrap>
              <Link to="/" style={{ display: "flex" }}>
                <Logo changeColor="white" />
              </Link>

              <div className="middle">
                <span>숙소</span>
                <span>체험</span>
                <span>온라인 체험</span>
              </div>

              <UserInfo>
                <Text color="#fff">호스트 되기</Text>
                <HiOutlineGlobeAlt size="16px" color="white"/>
                <Hbutton></Hbutton>
              </UserInfo>
            </MiddleWrap>
          
            <SearchBtn>
              <div className= "searchbtn">
              <Button margin="0" borderRadius="40px 0px 0px 40px">위치 <br/> 어디로 여행가세요?</Button>
              <Button borderRadius="0">채크인<br/> 날짜 입력</Button>
              <Button borderRadius="0">체크아웃<br/>날짜 입력</Button>
              <Button borderRadius="0px 40px 40px 0px">인원<br/>게스트추가</Button>
              </div>
            </SearchBtn>  
          </div>): (<Navi  ><Navigation/></Navi>)}

          <LastWrap>
            <div className="bigimage">
              <Text size="48px" bold color="#fff" center>
                에어비앤비가 <br /> 여행지를 찾아드릴게요!
              </Text>
              <Button borderRadius="40px">유연한 검색</Button>
            </div>
          </LastWrap>
        </Whole>
      </FirstWrap>
      </Total>

      <Center>  
        <Text size="42px" bold>
          설레는 다음 여행을 위한 아이디어
        </Text>
        <Wrap>
          <Card onClick={() => {history.push("/postlist")}}>
            <Image
              br="15px 15px 0px 0px"
              shape="rectangle"
              height="200px"
              src="https://a0.muscache.com/im/pictures/19d4c139-3615-4440-b5e3-55ee3f87e240.jpg?im_w=320"
            />
            <Localname  bg="#BC196D">
              <Bigfont>서울</Bigfont>
              <Midfont>2km 거리</Midfont>
            </Localname>
          </Card>

          <Card>
            <Image
              br="15px 15px 0px 0px"
              shape="rectangle"
              height="200px"
              src="https://a0.muscache.com/im/pictures/241d2e75-21ed-4b13-bf46-673baf1abc69.jpg?im_w=480"
            />
            <Localname bg="#D93A30">
              <Bigfont>인천</Bigfont>
              <Midfont>29km 거리</Midfont>
            </Localname>
          </Card>

          <Card>
            <Image
              br="15px 15px 0px 0px"
              shape="rectangle"
              height="200px"
              src="https://a0.muscache.com/im/pictures/1e5fc501-e1ed-4de4-be9f-811e9de0a0d2.jpg?im_w=320"
            />
            <Localname bg="#CC2D4A">
              <Bigfont>대구</Bigfont>
              <Midfont>237km 거리</Midfont>
            </Localname>
          </Card>

          <Card>
            <Image
              br="15px 15px 0px 0px"
              shape="rectangle"
              weight="300px"
              height="200px"
              src="https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_w=320"
            />
            <Localname bg="#DD3150">
              <Bigfont>대전</Bigfont>
              <Midfont>140km 거리</Midfont>
            </Localname>

            
          </Card>

        </Wrap>

        <SecWrap>    
        <Text size="42px" bold>
          에어비앤비 체험 둘러보기
        </Text>

        <Exp>
          <TwoCard>
            <TwoImg background="https://a0.muscache.com/im/pictures/3290306e-8e26-4c77-a96a-777e554c5222.jpg?im_w=720">
              <Text margin="0"  size="53px" bold color="#fff">
                여행 중 만나는 <br />
                이색적인 즐길 거리
              </Text>
              <Button fontSize="30px">체험</Button>
            </TwoImg>
          </TwoCard>
          <TwoCard>
            <TwoImg background="https://a0.muscache.com/im/pictures/2e9e0381-68d8-4961-abf2-a4f897b41fa8.jpg?im_w=960">
              <Text margin="0" size="53px" bold color="#fff">
                집에서 만나는 <br />
                다양한 즐길 거리
              </Text>
              <Button fontSize="24px">온라인 체험</Button>
            </TwoImg>
          </TwoCard>
        </Exp>

          <TwoCard>
            <LastImg background="https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=1440">
            <Text  size="53px" bold color="#fff">
                호스팅에 관해 <br />
                궁금하신 점이<br/>
                있나요?
              </Text>
              <Button width="300px" padding="14px 24px" fontSize="24px">슈퍼호스트에게 물어보세요 </Button>  
            </LastImg>
          </TwoCard>
          </SecWrap>
      </Center>
      
    </React.Fragment>
  );
};

export default MainTop;

const Total = styled.div`
  background-color: black;
`;

const FirstWrap = styled.div`
  height: 100vh;
  wight: 100vw;
  margin: 0 5vw;
`;

const Whole = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

const Warning= styled.div`
  display: flex;
  justify-content:center;
`

const MiddleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width:90vw;



  .middle {
    span {
      font-size: 16px !important;
      line-height: 20px !important;
      cursor: pointer !important;
      display: inline-block !important;
      font-weight: 400 !important;
      padding: 10px 12px !important;
      position: relative !important;
      text-align: center !important;
      color: #ffffff !important;

      &:hover{
        border-bottom: 2px solid black !important;
      }  
    }
  }
`;

const UserInfo = styled.div`

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const SearchBtn =styled.div`
  display: flex;
  justify-content: center;

  .searchbtn{
    display: flex; 
    width: 60vw;
  }

`;

const Navi=styled.div`
  position:fixed;
  top:0;
  width: 92vw;
`;

const LastWrap = styled.div`
  display:flex;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 500px;
  width: 90vw;
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  justify-content: center;
  .bigimage {}
 `; 



const Center= styled.div`
  margin: 0px 5vw;
`;

const Wrap = styled.div`
  height: 100%;
  width:90vw;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  cursor: pointer;
`;

const Localname = styled.div`
  background-color: ${(props) => props.bg};
  border-radius: 0px 0px 15px 15px;
  height: 200px;
  width: 300px;
`;

const Bigfont = styled.h1`
    color:white;
    margin: 20px 10px;
    bold;
`;

const Midfont = styled.h2`
  color: white;
  margin: 0px 10px;
`;

const SecWrap = styled.div`
  width: 90vw;
`

const Exp = styled.div`
  display: flex;
  width:90vw;

  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
`;

const TwoCard = styled.div`
  
  }
`;


const TwoImg = styled.div`
  border-radius: 15px;
  width: 33vw;
  height: 717px;
  padding: 80px;
  background: ${props => `url(${props.background})`};
  background-size:cover;
  background-position:center;
`;

const LastImg = styled.div`
  margin: 90px 0px;
  border-radius: 15px;
  height: 717px;
  padding: 80px;
  background: ${props => `url(${props.background})`};
  background-size:cover;
  background-position:center;
`;