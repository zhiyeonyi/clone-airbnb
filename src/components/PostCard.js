import axios from "axios";
import React from "react";
import styled from "styled-components";
import Testimg from "../shared/images/쿵이.png";
import { useState } from "react";
import { Text } from "../elements";
import { AiFillStar } from "react-icons/ai";


const PostCard = (props) => {
 
  return (
    <React.Fragment>
      <Card>
        <Line />
        <ImgTextBox>
          <NemoImg src={props.accomoImg} alt="" />
          <TextBox>
            <OnlyText>
              <Text size="22px" margin="0">{props.accomoTitle}</Text>
              <Text size="15px" margin="10px 0px" color="gray">{props.accomoContent}</Text>
            </OnlyText>
            <Rate>
            <AiFillStar size="15px" color="#FF5A5E"/><Text margin="0">rate</Text>
            </Rate>
          </TextBox>
        </ImgTextBox>
      </Card>
    </React.Fragment>
  );
};

const Card = styled.div`
  width: 40em;
  height: 15em;
  margin: 4px 100px 0px 26px;
  background-color: green;
`;
const Line = styled.hr`
  margin: 5px 14px 26px 0px;
  border: none;
  border-top: 1px solid #dddddd;
`;

const ImgTextBox = styled.div`
  width: 48em;
  height: 14em;
  background: red;
  display: flex;

  
`;

const NemoImg = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 25px;
  background: yellow;
`;

const TextBox = styled.div`
height: 200px;
margin: 0px 15px;
display:flex;
flex-direction:  column;
justify-content: space-between;
`;

const OnlyText =styled.div`

`;

const Rate = styled.div`
  display: flex;
`;

export default PostCard;
