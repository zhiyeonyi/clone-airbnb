import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as userActions } from "../redux/modules/user";

import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import "../shared/modal.css";
import Signup from "../pages/Signup"; 
import {AiOutlineLock} from "react-icons/ai";

const Hbutton = () => {
  const dispatch = useDispatch();
  const user_token = localStorage.getItem("user_token") ? true : false; //토큰이 있으면

  // 각각의 모달 상태 관리 위한 변수 선언
  const [isFirstModal, setFirstModal] = React.useState(false); // First Modal
  const [isSignModal, setSignModal] = React.useState(false); // Signup Modal  
  const [isLoginModal, setLoginModal] = React.useState(false); // Login Modal
  // const [isLoginModal, setLoginModal] = React.uuseState(false); // Login Modal

  // 아직 이해 안댐
  // const modalOpen = (e, stateSub = true, stateMain = false) => {
  //   setFirstModal(stateMain); //false
  //   setSecModal(stateSub); //true
  // }; // 이 부분에서 회원가입 모달이 true면 로그인모달은 false의 조건 작성

  // 첫번째 모달 켜기
  const firstModalOn = () => {
    setFirstModal(true);
  };
  // 첫번째 모달 끄기
  const firstModalOff = () => {
    setFirstModal(false);
  };

  // 두번째 모달에 내려줄 함수 -> 함수를 내려줌으로써 자식 컴포넌트에서 부모 컴포넌트의 스태이트를 관리 할 수 있다.
  const BtnStateOff = () => {
    setSignModal(false);
    setLoginModal(false);
  }

  // 회원가입 모달 켜기, 첫번째 모달 끄기
  const SignupOn = () => {
    isSignModal ? setSignModal(false) : setSignModal(true);
    setLoginModal(false); // 회원가입 눌렀을때 로그인 값은 false로 넘겨주기위해
    setFirstModal(false);
 
  };

  // 로그인 모달 켜기, 첫번째 모달 끄기
  const LoginOn = () => {
    isLoginModal ? setLoginModal(false) : setLoginModal(true);
    setSignModal(false);
    setFirstModal(false);
  };
  // 로그아웃 버튼 클릭 시
  const logOut = () => {
    localStorage.removeItem("user_token") //  토큰 삭제
    window.alert("로그아웃 하셨습니다.")
    window.location.reload();
  };

  return (
    <>
      <Container
        onClick={
          firstModalOn
          // () => {
          //   isFirstModal ? setFirstModal(false) : setFirstModal(true);
          // }
        }
      >
        <IoReorderThreeOutline padding="7px 10px" size="30px" />
        <FaUserCircle margin="0px 30px" size="30px" color="#BFBFBF" />
      </Container>
      {isFirstModal &&
        (user_token ? (
          <Modal
            isOpen={isFirstModal}
            ariaHideApp={false}
            onRequestClose={firstModalOff}
            className="firstModal"
            overlayClassName="firstOverlay"
          >
            <UserModal>
              <UserModalBtn onClick={logOut}>로그아웃</UserModalBtn>
              <UserModalBtn><AiOutlineLock size="22px"/> </UserModalBtn>
            </UserModal>
          </Modal>
        ) : (
          <Modal
            isOpen={isFirstModal}
            ariaHideApp={false}
            onRequestClose={firstModalOff}
            className="firstModal"
            overlayClassName="firstOverlay"
          >
            <UserModal>
              <UserModalBtn
                onClick={
                  SignupOn
                  // () => {
                  //   isSignModal ? setSignModal(false) : setSignModal(true);
                  // }
                }
              >
                회원가입
              </UserModalBtn>
              <UserModalBtn
                onClick={
                  LoginOn
                  // () => {
                  // isSignModal ? setSignModal(false) : setSignModal(true);
                  // }
                }
              >
                로그인
              </UserModalBtn>
            </UserModal>
          </Modal>
        ))}
      {(isSignModal || isLoginModal) && (
        <Signup _signStatus={isSignModal} _loginStatus={isLoginModal} BtnStateOff={BtnStateOff} />
      )}
    </>
  );
};

//  {user_token ? (
//                <UserModal>
//         <UserModalBtn onClick={logOut}>로그아웃</UserModalBtn>
//       </UserModal>
//         ) :
/* <button type="primary" onClick={secModalOpen}>
          Open Modal
        </button> */
/* <Modal
        title="Second Modal"
        isOpen={isSecModal}
        ariaHideApp={false}
        onRequestClose={secModalOff}
        // onOk={(e) => modalOpen(e, false)}
        // onCancel={(e) => modalOpen(e, false)}
      >
       //여긴 두번째 모달창
      </Modal> */

const Container = styled.button`
  width: 6rem;
  height: 3rem;
  border: 1px solid #dddddd;
  border-radius: 3rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 5.5rem; */
  cursor: pointer;
`;

const UserModal = styled.div`
  width: 15rem;
  height: 10rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  right: 11rem;
  border-radius: 1.5rem;
  /* z-index: 2; */
`;

const UserModalBtn = styled.div`
  width: 15rem;
  height: 5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 150ms ease-in-out;
  transition: font-size 150ms ease-in-out;
  cursor: pointer;
  &:nth-child(1) {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
  &:nth-child(2) {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  &:hover {
    background-color: #dddddd;
    opacity: 80%;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export default Hbutton;
