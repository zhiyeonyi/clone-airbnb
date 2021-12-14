import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import "../shared/modal.css";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Hmodal = (props) => {
  const dispatch = useDispatch();
  const user_token = localStorage.getItem("user_token") ? true : false; //토큰이 있으면

  // 모달창 열렸는지 닫혔는지 정해준다
  const [hModal, setHModal] = React.useState(props.modal ? true : false);
  console.log(hModal); //true로 잘 넘어옴
  // 모달창을 닫으면 header의 state도 false로 바꿔주기
  const modalOff = () => {
    setHModal(false);
    props.setFirstModalStatus(false); // Hbutton의 변수 값도 바꿔줘야 함
  };

  // 회원가입 및 로그인 모달
  const [signupModal, setSignupModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  // console.log(signupModal);
  // // 회원가입 버튼 클릭 시
  const signupModalOpen = () => {
    setHModal(false);
    setSignupModal(true);
    //   console.log(hModal);
    //   console.log(signupModal);
  };
  // 로그인 버튼 클릭 시
  const loginModalOpen = () => {
    props.setFirstModalStatus(false);
    setLoginModal(true);
  };
  // 로그아웃 버튼 클릭 시
  const logOut = () => {
    // dispatch(userDB함수)
    // localStorage.removeItem("user_token") 토큰 삭제
    window.location.reload(); // 여기서는 새로고침을 해주기 때문에 props.setFirstModalStatus(false);를 해줄 필요가 없다.
  };

  // 로그인 상태 뷰
  // if (user_token) {
  //   return (
  //     <React.Fragment>
  // <div>
  //   <Modal
  //     isOpen={hModal} // isOpen={true}로 모달창을 열 수 있다.
  //     ariaHideApp={false} // appElement가 숨겨져야 하는지의 여부
  //     onRequestClose={modalOff} // 모달창 이외의 부분이나 ESC를 누를 경우 모달창을 끈다.
  //     className="Modal"
  //     overlayClassName="Overlay"
  //   >
  //     <UserModal>
  //       <UserModalBtn onClick={logOut}>로그아웃</UserModalBtn>
  //     </UserModal>
  //   </Modal>
  // </div>
  //     </React.Fragment>
  //   );
  // }

  // 로그아웃 상태 뷰
  return (
    <React.Fragment>
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
                model={hModal}
                setSignupModal={setSignupModal}
                setFirstModalStatus={props.setFirstModalStatus}
              ></Signup>
            )}
            <UserModalBtn onClick={loginModalOpen}>로그인</UserModalBtn>
            {loginModal && (
              <Login modal={loginModal} setLoginModal={setLoginModal}></Login>
            )}
          </UserModal>
        </Modal>
      </div>
    </React.Fragment>
  );
};

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

export default Hmodal;
