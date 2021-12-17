import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const ModalOfMap = (props) => {
const BtnOff = props.BtnOff
 const [modalOn, setModalOn] = React.useState(props.modal)
const modelOff = () => {
  setModalOn(false);
  BtnOff();
}
 

let idx = props.posts.posts.findIndex((p) => p.accomoId === props.Id)

const accomotitle = props.posts.posts[idx].accomoTitle
const accomoimg = props.posts.posts[idx].accomoImg
const accomoadress = props.posts.posts[idx].accomoAdress
const accomorating = props.posts.posts[idx].accomoRating

  return (
    <React.Fragment>
      <Modal
        isOpen={modalOn}
        ariaHideApp={false}
       onRequestClose={modelOff}
       style={{
        // inLine Styles
        content: {
          border: "1px solid black",
          borderRadius: "20px",
          left: "65rem",
          right: "8rem",
          top: "12rem",
          bottom: "3rem",
        },
        overlay: {
          backgroundColor: "none",
        },
      }}
      >
        <OutDiv>
          <FirstDiv>
            <ModalImg src={accomoimg} alt=""/>
          </FirstDiv>
          <SecDiv>
            <Text><AiFillStar color="#FF385C"/>{accomorating}<br/>{accomoadress}</Text>
            <Text>{accomotitle}</Text>
          </SecDiv>
        </OutDiv>  
        </Modal>
    </React.Fragment>
  )
} 

const OutDiv = styled.div`
  width: 280px;
  height: 280px;
`

const ModalImg = styled.img`
  width: 310px;
  height: 240px;
`

const FirstDiv = styled.div`
 width: 280px;
 height: 240px;
`
const SecDiv = styled.div`
  width: 280px;
  height: 60px;
`
const Text = styled.p`
  font-size= 10px;
`

const StarIcon = styled.img`
 width: 15px;
 height: 15px;
 fill: red;
`

export default ModalOfMap;