import React from "react";
import Modal from "react-modal";
import { Button } from "../elements";
import styled from "styled-components";
const App = () => {
  const [isMainModel, setMainModel] = React.useState(false); // First Model
  const [isSubModel, setSubModel] = React.useState(false); // Second Model

  const onSubModel = (e, stateSub = true, stateMain = false) => {
    setMainModel(stateMain); //false
    setSubModel(stateSub); //true
  }; // 이 부분에서 회원가입 모달이 true면 로그인모달은 false의 조건 작성

  return (
    <>
      <Container onClick={() => setMainModel(true)}>icon</Container>
      <Modal
        title="Main Modal"
        isOpen={isMainModel}
        ariaHideApp={false}
        onRequestClose={() => setMainModel(false)}
        // onOk={() => setMainModel(false)}
        // onCancel={() => setMainModel(false)}
      >
        {}
        <button type="primary" onClick={onSubModel}>
          Open Modal
        </button>
      </Modal>
      <Modal
        title="Sub Modal"
        isOpen={isSubModel}
        onOk={(e) => onSubModel(e, false)}
        onCancel={(e) => onSubModel(e, false)}
      >
        <UserModal>
          <UserModalBtn>회원가입</UserModalBtn>

          {/* <UserModalBtn onClick={loginModalOpen}>로그인</UserModalBtn>
            {loginModal && (
              <Login modal={loginModal} setLoginModal={setLoginModal}></Login>
            )} */}
        </UserModal>
      </Modal>
    </>
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

export default App;
