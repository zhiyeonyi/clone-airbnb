import React from "react";
import styled from "styled-components";
import { Image, Text, Button } from "../elements";

const LocalCtgr = () => {
  return (
    <React.Fragment>
      <Text size="42px" bold>
        설레는 다음 여행을 위한 아이디어
      </Text>
      <Wrap>
        <Card>
          <Image
            br="15px 15px 0px 0px"
            shape="rectangle"
            height="200px"
            src="https://a0.muscache.com/im/pictures/19d4c139-3615-4440-b5e3-55ee3f87e240.jpg?im_w=320"
          />
          <Localname>
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
          <Localname style={{ backgroundColor: "bc196d" }}>
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
          <Localname>
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
          <Localname>
            <Bigfont>대전</Bigfont>
            <Midfont>140km 거리</Midfont>
          </Localname>
        </Card>
      </Wrap>

      <Text size="42px" bold>
        에어비앤비 체험 둘러보기
      </Text>

      <Exp>
        <TwoCard>
          <OneImg>
            <Text size="53px" bold color="#fff">
              여행 중 만나는 <br />
              이색적인 즐길 거리
            </Text>
            <Button>체험</Button>
          </OneImg>
        </TwoCard>
        <TwoCard>
          <TwoImg>
            <Text size="53px" bold color="#fff">
              집에서 만나는 <br />
              다양한 즐길 거리
            </Text>
            <Button display="flex">온라인 체험</Button>
          </TwoImg>
        </TwoCard>
      </Exp>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  cursor: pointer;
`;

const Localname = styled.div`
  background-color: #bc196d;
  border-radius: 0px 0px 15px 15px;
  height: 200px;
  width: 300px;
`;

const Bigfont = styled.h1`
    color:white;
    margin: 20px 10px;
    bold;å
`;

const Midfont = styled.h2`
  color: white;
  margin: 0px 10px;
`;

const Exp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
`;

const TwoCard = styled.div`
  
  }
`;

const OneImg = styled.div`
  border-radius: 15px;
  width: 562px;
  height: 717px;
  padding: 80px;
  background-image: url("https://a0.muscache.com/im/pictures/3290306e-8e26-4c77-a96a-777e554c5222.jpg?im_w=720");
`;
const TwoImg = styled.div`
  border-radius: 15px;
  width: 628px;
  height: 717px;
  padding: 80px;
  background-image: url("https://a0.muscache.com/im/pictures/2e9e0381-68d8-4961-abf2-a4f897b41fa8.jpg?im_w=960");
`;

export default LocalCtgr;
