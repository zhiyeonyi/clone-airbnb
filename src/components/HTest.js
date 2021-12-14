import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import "../shared/modal.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Hmodal from "./Hmodal";

const Hbutton = (props) => {
  const dispatch = useDispatch();
  const user_token = localStorage.getItem("user_token") ? true : false; //토큰이 있으면

  // 모달 기본 세팅 버튼부분 true, false로 열고 닫아주기 위해 변수 지정
  const [firstModalStatus, setFirstModalStatus] = React.useState(false);
  // 버튼 클릭 시 모달창 활성화 시키기 위한 함수(위 변수를 true로 변환)
  const firstModalOpen = () => {
    setFirstModalStatus(true);
  };

  // 모달창 열렸는지 닫혔는지 정해준다
  const [hModal, setHModal] = React.useState(firstModalStatus ? true : false);
  // 모달창을 닫으면 header의 state도 false로 바꿔주기
  const modalOff = () => {
    setFirstModalStatus(false);
  };

  // 회원가입 및 로그인 버튼 모달
  const [signupModal, setSignupModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  // 회원가입 버튼 클릭 시
  const signupModalOpen = () => {
    // setSignupModal(true);
    // setFirstModalStatus(false);
  };
  // 로그인 버튼 클릭 시
  const loginModalOpen = () => {
    // setFirstModalStatus(false);
    // setLoginModal(true);
  };
  // 로그아웃 버튼 클릭 시
  const logOut = () => {
    // dispatch(userDB함수)
    // localStorage.removeItem("user_token") 토큰 삭제
    window.location.reload(); // 여기서는 새로고침을 해주기 때문에 props.setFirstModalStatus(false);를 해줄 필요가 없다.
  };

  return (
    <React.Fragment>
      <div>
        <Container onClick={firstModalOpen}>icon</Container>
      </div>

      {firstModalStatus &&
        (user_token ? (
          <div>
            <Modal
              isOpen={hModal} // isOpen={true}로 모달창을 열 수 있다.
              ariaHideApp={false} // appElement가 숨겨져야 하는지의 여부
              onRequestClose={modalOff} // 모달창 이외의 부분이나 ESC를 누를 경우 모달창을 끈다.
              className="Modal"
              overlayClassName="Overlay"
            >
              <UserModal>
                <UserModalBtn onClick={logOut}>로그아웃</UserModalBtn>
              </UserModal>
            </Modal>
          </div>
        ) : (
          <div>
            <Modal
              isOpen={hModal} // isOpen={true}로 모달창을 열 수 있다.
              ariaHideApp={false} // appElement가 숨겨져야 하는지의 여부
              onRequestClose={modalOff} // 모달창 이외의 부분이나 ESC를 누를경우 모달창을 끈다.
              className="Modal"
              overlayClassName="Overlay"
            >
              <UserModal>
                <UserModalBtn onClick={signupModalOpen}>회원가입</UserModalBtn>
                {signupModal && (
                  <Signup
                    modal={signupModal}
                    setSignupModal={setSignupModal} //여기에 first모달 끄는걸 넣어야 하나? 순서 문제일 가능성이 있음
                  ></Signup>
                )}
                <UserModalBtn onClick={loginModalOpen}>로그인</UserModalBtn>
                {loginModal && (
                  <Login
                    modal={loginModal}
                    setLoginModal={setLoginModal}
                  ></Login>
                )}
              </UserModal>
            </Modal>
          </div>
        ))}
    </React.Fragment>
  );
};

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
  z-index: 2;
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
