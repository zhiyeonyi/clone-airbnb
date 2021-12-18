// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

// *** 액션 타입
const LOGIN = "user/LOGIN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USET"
// *** 액션 생성 함수
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setLogin = createAction(LOGIN, (user) => ({ user }));
const setUser = createAction(SET_USER, (userEmail, password, passwordConfirm, userName) => ({userEmail, password, passwordConfirm, userName}))

// *** 초기값
const initialState = {
  userEmail: null,
  password: null,
  passwordConfirm: null,
  userName: null,
  is_login: false,
  userId: null,
};

// *** 미들웨어
// 회원가입 
// const signUpDB = (userEmail, password, passwordConfirm, userName) => {
//   return function (dispatch, getState, { history }) {
//     axios
//       .post("http://13.209.40.227/api/users/sign-up", {
//         userEmail: userEmail,
//         password: password,
//         passwordConfirm: passwordConfirm,
//         userName: userName,
//       })
//       .then((res) => {
//         console.log(res)
//         window.alert("회원가입 되셨습니다.");
//       })
//       .catch((err) => {
//         window.alert("이미 존재하는 아이디 또는 이메일입니다.");
//       });
//   };
// };

const signUpDB = (userEmail, password, passwordConfirm, userName) =>  {
  return function (dispatch, getState, { history }) {
    apis
      .signup(userEmail, password, passwordConfirm, userName)
      .then((res) => {
        dispatch(setUser(userEmail, password, passwordConfirm, userName))
        window.alert("회원가입 되셨습니다.");
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response)
      });
  };
};

// 로그인
const loginDB = (userEmail, password) => {
  return  function (dispatch, getState, { history }) {
    axios({method: "post", data: {
      userEmail: userEmail,
      password: password,
    }, url: "http://13.209.40.227/api/users/sign-in"}) // 로그인 요청
      .then((res) => {

        const user_token = res.data.token;
        dispatch(setLogin(res.data.userId))
        localStorage.setItem("user_token", user_token);
        window.alert("로그인 되셨습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
        window.alert("아이디/비밀번호를 확인 해주세요");
      });
  };
};

// *** 로그아웃
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    axios // 로그아웃
      .get("http://13.209.40.227/api/logout")
      .then((res) => {
        dispatch(logOut());
        console.log("로그아웃 성공");
        window.location.reload();
      })
      .catch((err) => {
        console.log("로그아웃 실패");
      });
  };
};
// *** 리듀서
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.userId;
        draft.is_login = true;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userEmail = action.payload.userEmail;
        draft.password = action.payload.password;
        draft.passwordConfirm = action.payload.passwordConfirm;
        draft.userName = action.payload.userName;
      })
  },
  initialState
);
// *** 액션 생성 함수 export
const actionCreators = {
  signUpDB,
  loginDB,
  logoutDB,
};
export { actionCreators };
