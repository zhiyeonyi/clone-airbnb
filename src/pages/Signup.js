// Signup.js

// *** 패키지 import
import React from "react";
import Modal from "react-modal";

import { Grid, Text, Input, Button } from "../elements";
import "../shared/modal.css";

const Signup = (props) => {
  //모달창 열렸는지의 여부
  const [Smodal, setSModal] = React.useState(props.modal ? true : false);
  //모달창을 닫으면 header의 state도 false로 바꾸기
  const modalOff = () => {
    setSModal(false);
    props.setSignupModal(false);
  };

  //회원가입 버튼 클릭 시
  const signup = () => {
    // dispatch(회원가입액션)
    setSModal(false);
    props.setSignupModal(false);
  };

  return (
    <React.Fragment>
      {Smodal && (
        <Modal isOpen={Smodal} ariaHideApp={false} onRequestClose={modalOff}>
          <Grid>
            <Text>회원가입</Text>
            <Grid>
              <Text>에어비엔비에 오신 것을 환영합니다.</Text>
              <Grid>
                <Input type="text" placeholder="이메일을 입력하세요." />
              </Grid>
              <Grid>
                <Input type="password" placeholder="비밀번호를 입력하세요." />
              </Grid>
              <Grid>
                <Input
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요."
                />
              </Grid>
              <Grid>
                <Input type="text" placeholder="닉네임을 입력하세요." />
              </Grid>
              <Button text="회원가입" _onClick={signup}></Button>
            </Grid>
          </Grid>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Signup;
