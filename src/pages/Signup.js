// Signup.js

// *** 패키지 import
import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { useDispatch } from "react-redux";
// 액션 임포트하기

import { Grid, Text, Input, Button, Span } from "../elements";
import "../shared/modal.css";

const Signup = (props) => {

  const dispatch = useDispatch();
  const token = localStorage.getItem("user_token");

  // 첫번째 모달 회원가입, 로그인 버튼 true값 받아오기
  const { _signStatus, _loginStatus } = props;

  //모달창 열렸는지의 여부
  const [signStatus, setSignStatus] = React.useState(_signStatus);
  const [loginStatus, setLoginStatus] = React.useState(_loginStatus);

  // 아이디, 비밀번호, 비밀번호, 닉네임 확인
  const [email, setId] = React.useState(""); // 아이디
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
  const [active, setActive] = React.useState(true);

  //모달창을 닫으면 header의 state도 false로 바꾸기
  const modalOff = () => {
    setSignStatus(false);
    setLoginStatus(false);
  };

    // disabled 체크 
    const checkActive = () => {
      const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;
  
      overlap === true &&
      email !== "" &&
      password !== "" &&
      passwordCheck !== "" &&
      username !== "" &&
      password === passwordCheck &&
      regPwd.test(password)
        ? setActive(false)
        : setActive(true);
    };
  
    // 이메일 중복 검사
    const overlapCheck = () => {
      axios
        .post(
          "http://3.37.36.119/api/idCheck",
          { email: email },
          { headers: { Authorization: token } }
        )
        .then((response) => {
          // 아이디가 중복되지 않은 경우 true 반환
          // 아이디가 중복인 경우 false 반환
          console.log("중복 검사 성공");
  
          const regId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
          const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;
  
          // 사용 가능한 아이디일 경우
          if (response.data.result && regId.test(idCurrent) && idCurrent) {
            setIsId(true); // 유효성 검사 true
            setOverlap(response.data.result); // 중복 검사 true
            setIdMessage("사용 가능한 이메일입니다."); // span 태그
  
            // 비밀번호를 입력 안했을 경우 회원가입 버튼 비활성화
            if (password === passwordCheck && regPwd.test(pwdCurrent)) {
              setActive(false);
            }
          } else if (!regId.test(idCurrent)) {
            // 정규식 검사에 맞지 않는 아이디일 경우
            setIsId(false);
            setIdMessage("이메일 형식에 맞게 만들어주세요!");
            setActive(true);
          } else {
            // 사용 할 수 없는 아이디일 경우
            setIsId(false); // 유효성 검사 false
            setOverlap(response.data.result); // 중복 검사 false
            setIdMessage("중복된 이메일입니다."); // span 태그
            setActive(true); // 사용 할 수 없는 아이디일 경우 회원가입 버튼 비활성화
          }
        })
        .catch((err) => {
          console.log("중복 검사 실패");
        });
    };
  
    // 이메일 유효성 검사 및 onchange 값 저장
    const idCheck = (e) => {
      setId(e.target.value);
      // 아이디 정규식이 너무 헷갈림 특수기호 -_ 나중에 한번더 확인할 것 !
      const regId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
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
    }
  
    // 회원가입 버튼 클릭, signUpDB 실행!
    const signUpCheck = () => {
      // dispatch(userActions.signUpDB(email, password, passwordCheck, username));
      setSignStatus(false);
    };

  const login = () => {
    // dispatch(로그인액션)
    setLoginStatus(false);
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
            overlay: {},
          }}
        >
          <Grid padding="16px" center>
          <Text size="1vw" bold center>
            회원가입
          </Text>
          <hr/>
          <Text bold size="1.5vw">
          에어비앤비에 오신 것을 환영합니다.
            </Text>
          <Grid padding="0px 0px" height="20%" is_flex>
            <Input
              placeholder="이메일을 입력하세요."
              type="text"
              value={email}
              _onChange={idCheck}
              _onKeyUp={checkActive}
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

            <Button
              text="중복검사"
              width="18vw"
              margin="3% 0px 3% 0px"
              _onClick={overlapCheck}
            ></Button>
            <br />

            <Grid margin="1% 0px 0px 0px">
              <Input
                placeholder="비밀번호를 입력하세요."
                type="password"
                value={password}
                _onChange={pwdCheck}
                _onKeyUp={checkActive}
              />
              {password.length > 0 && (
                <>
                  <br />
                  <Span size="3px" className={`${isPwd ? "success" : "error"}`}>
                    {pwdMessage}
                  </Span>
                </>
              )}
            </Grid>
            <br />

            <Grid>
              <Input
                placeholder="비밀번호를 다시 입력하세요."
                type="password"
                value={passwordCheck}
                _onChange={isSamePwd}
                _onKeyUp={checkActive}
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
            </Grid>
            <br />

            <Grid>
              <Input
                placeholder="닉네임을 입력하세요."
                type="text"
                value={username}
                _onChange={userNameCheck}
                _onKeyUp={checkActive}
              />
            </Grid>

            <Button
              text="회원가입하기"
              className={!active ? "activeBtn" : "unActiveBtn"}
              width="18vw"
              margin="3% 0px 3% 0px"
              _onClick={signUpCheck}
              disabled={active}
            ></Button>
          </Grid>
        </Grid>
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
              border: "1px solid black",
              left: "36em",
              right: "36em",
              top: "5em",
              bottom: "5em",
            },
            overlay: {},
          }}
        >
          <Grid padding="16px" center>
            <Text size="3vw" bold>
              로그인
            </Text>
            <Grid>
              <Text>에어비엔비에 오신 것을 환영합니다.</Text>
              <Grid>
                <Input type="text" placeholder="이메일을 입력하세요." />
              </Grid>
              <Grid>
                <Input type="password" placeholder="비밀번호를 입력하세요." />
              </Grid>
              <Button text="로그인" _onClick={login}></Button>
            </Grid>
          </Grid>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Signup;
