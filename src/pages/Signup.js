// Signup.js

// *** 패키지 import
import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import { actionCreators as userActions } from "../redux/modules/user";
import { Text, Span } from "../elements";
import "../shared/modal.css";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem("user_token");

   // 부모 컴포넌트의 state를 관리해줄 함수!
   const BtnStateOff = props.BtnStateOff

  // 첫번째 모달 회원가입, 로그인 버튼 true값 받아오기
  const { _signStatus, _loginStatus } = props;

  //모달창 열렸는지의 여부
  const [signStatus, setSignStatus] = React.useState(_signStatus);
  const [loginStatus, setLoginStatus] = React.useState(_loginStatus);

  // 아이디, 비밀번호 - 로그인 부분
  const [LEmail, setLEmail] = React.useState(""); // 이메일
  const [LPwd, setLPwd] = React.useState(""); // 비밀번호

  // 아이디, 비밀번호, 비밀번호, 닉네임 확인 - 회원가입 부분
  const [email, setId] = React.useState(""); // 이메일
  const [password, setPwd] = React.useState(""); // 비밀번호
  const [passwordCheck, setPwdCheck] = React.useState(""); // 비밀번호
  const [username, setNickname] = React.useState(""); // 닉네임

  // 오류 메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");
  const [pwdMessage, setPwdMessage] = React.useState("");
  const [pwdCheckMessage, setPwdCheckMessage] = React.useState("");

  // 아이디 중복 체크
  const [overlap, setOverlap] = React.useState(false);
  const [idCurrent, setIdCurrent] = React.useState();
  const [pwdCurrent, setPwdCurrent] = React.useState();

  // 유효성 검사
  const [isId, setIsId] = React.useState("");
  const [isPwd, setIsPwd] = React.useState("");
  const [isPwdCheck, setIsPwdCheck] = React.useState("");

  // disabled 활성화 여부
  const [active, setActive] = React.useState(true); // 회원가입 부분
  const [LActive, setLActive] = React.useState(true);

  //모달창을 닫으면 header의 state도 false로 바꾸기
  const modalOff = () => {
    setSignStatus(false);
    setLoginStatus(false);
    BtnStateOff();
  };

  // disabled 체크 - 회원가입
  const checkActive = () => {
    email !== "" &&
    password !== "" &&
    passwordCheck !== "" &&
    username !== "" &&
    password === passwordCheck 
      ? setActive(false)
      : setActive(true);
  };

  // disabled 체크 - 로그인
  const checkLActive = () => {
    LEmail !== "" && LPwd !== "" ? setLActive(false) : setLActive(true);
  };

  // 이메일 유효성 검사 및 onchange 값 저장
  const idCheck = (e) => {
    setId(e.target.value);
    // 아이디 정규식이 너무 헷갈림 특수기호 -_ 나중에 한번더 확인할 것 !
    const regId =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      const idCurrnet = e.target.value;
    setIdCurrent(idCurrnet);

    if (!regId.test(idCurrent)) {
      setIdMessage("이메일 형식에 맞게 만들어주세요!");
      setIsId(false);
    } else {
      setIdMessage("올바른 이메일 형식이에요 :)");
      setIsId(true);
    }
  };

  // 비밀번호 유효성 검사 및 onchange 값 저장
  const pwdCheck = (e) => {
    setPwd(e.target.value);
    const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;
    const pwdCurrent = e.target.value;

    setPwdCurrent(pwdCurrent);

    if (!regPwd.test(pwdCurrent)) {
      setPwdMessage("영문, 숫자를 조합하여 6~20자로 만들어주세요!");
      setIsPwd(false);
    } else {
      setPwdMessage("올바른 비밀번호에요 :)");
      setIsPwd(true);
    }
  };

  // 비밀번호 일치 여부 및 onchange 값 저장
  const isSamePwd = (e) => {
    setPwdCheck(e.target.value);
    const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;
    const SamePwdCurrent = e.target.value;

    if (!regPwd.test(SamePwdCurrent)) {
      setPwdCheckMessage(
        "형식에 맞지 않는 비밀번호입니다.. 다시 확인 해주세요!"
      );
      setIsPwdCheck(false);
    } else if (
      password !== "" &&
      passwordCheck !== "" &&
      password === SamePwdCurrent
    ) {
      setPwdCheckMessage("비밀번호가 같아요 :)");
      setIsPwdCheck(true);
    } else {
      setPwdCheckMessage("비밀번호가 틀려요... 다시 확인 해주세요!");
      setIsPwdCheck(false);
    }
  };

  // 닉네임 onchange 값 저장
  const userNameCheck = (e) => {
    setNickname(e.target.value);
  };

  // 로그인 아이디 onChange
  const idOnchange = (e) => {
    setLEmail(e.target.value)
  }
  // 로그인 비밀번호 onChange
  const pwdOnchange = (e) => {
    setLPwd(e.target.value)
  }

  // 회원가입 버튼 클릭, signUpDB 실행!
  const signUpCheck = () => {
    dispatch(userActions.signUpDB(email, password, passwordCheck, username));
    setSignStatus(false);
    BtnStateOff();
    history.replace("/");
  };

  
  const login = () => {
    dispatch(userActions.loginDB(LEmail, LPwd));
    setLoginStatus(false);
    BtnStateOff();
  };

  return (
    <React.Fragment>
      {signStatus && (
        <Modal
          isOpen={signStatus}
          ariaHideApp={false}
          onRequestClose={modalOff}
          style={{
            // inLine Styles
            content: {
              border: "1px solid black",
              borderRadius: "20px",
              left: "34em",
              right: "34em",
              top: "4.2em",
              bottom: "2.5em",
            },
            overlay: {
              backgroundColor: "none",
            },
          }}
        >
          <Agrid>
            <Cgrid>
              <Xbtn onClick={modalOff}>X</Xbtn>
              <Text margin="10px auto" size="16px" bold>
                회원가입
              </Text>
            </Cgrid>
            <Line />
            <Agrid>
              <Text bold size="22px">
                에어비앤비에 오신 것을 환영합니다.
              </Text>
              <Ainput
                placeholder="이메일을 입력하세요."
                type="text"
                value={email}
                onChange={idCheck}
                onKeyUp={checkActive}
              />
              {email.length > 0 && (
                <>
                  <br />
                  <Span size="3px" className={`${isId ? "success" : "error"}`}>
                    {idMessage}
                  </Span>
                </>
              )}
              <br />

              <Ainput
                placeholder="비밀번호를 입력하세요."
                type="password"
                value={password}
                onChange={pwdCheck}
                onKeyUp={checkActive}
              />
              {password.length > 0 && (
                <>
                  <br />
                  <Span size="3px" className={`${isPwd ? "success" : "error"}`}>
                    {pwdMessage}
                  </Span>
                </>
              )}
              <br />
              <Ainput
                placeholder="비밀번호를 다시 입력하세요."
                type="password"
                value={passwordCheck}
                onChange={isSamePwd}
                onKeyUp={checkActive}
              />
              {passwordCheck.length > 0 && (
                <>
                  <br />
                  <Span
                    size="3px"
                    className={`${isPwdCheck ? "success" : "error"}`}
                  >
                    {pwdCheckMessage}
                  </Span>
                </>
              )}
              <br />
              <Ainput
                placeholder="닉네임을 입력하세요."
                type="text"
                value={username}
                onChange={userNameCheck}
                onKeyUp={checkActive}
              />
              <Abutton onClick={signUpCheck} disabled={active}>
                회원가입하기
              </Abutton>
            </Agrid>
          </Agrid>
        </Modal>
      )}

      {loginStatus && (
        <Modal
          isOpen={loginStatus}
          ariaHideApp={false}
          onRequestClose={modalOff}
          style={{
            // inLine Styles
            content: {
              borderRadius: "20px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: "55%",
              width: "35%",
              padding: "20px 27px",
            },
            overlay: {
              backgroundColor: "none",
            },
          }}
        >
          <Agrid>
            <Cgrid>
              <Xbtn onClick={modalOff}>X</Xbtn>
              <Text margin="10px auto" size="16px" bold>
                로그인
              </Text>
            </Cgrid>
            <Line />
            <Agrid>
              <Text bold size="22px">
                에어비엔비에 오신 것을 환영합니다.
              </Text>
              <Ainput
                type="text"
                placeholder="이메일을 입력하세요."
                value={LEmail}
                onChange={idOnchange}
                onKeyUp={checkLActive}
              />
              <Ainput
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={LPwd}
                onChange={pwdOnchange}
                onKeyUp={checkLActive}
              />
              <Abutton disabled={LActive} onClick={login}>
                로그인
              </Abutton>
            </Agrid>
          </Agrid>
        </Modal>
      )}
    </React.Fragment>
  );
};

const Agrid = styled.div`
  height: auto;
`;

const Line = styled.hr`
  margin: 20px 0px;
  border: none;
  border-top: 2px dotted #cccccc;
`;

const Cgrid = styled.div`
  text-align: center;
  display: flex;
  position: relative;
`;

const Ainput = styled.input`
  width: 95.3%;
  height: 56px;
  border: 0.8px solid #cccccc;
  border-radius: 13px;
  padding: 0px 10px;
  margin: 15px 0px;
  &::placeholder {
    font-size: 14px;
  }
`;

const Abutton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 13px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  background: #ad305a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e84a5f,
    #ad305a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e84a5f,
    #ad305a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  cursor: pointer;
`;

const Xbtn = styled.button`
  position: absolute;
  top: 4px;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  &:hover {
    background-color: #eeeeee;
  }
`;

export default Signup;
