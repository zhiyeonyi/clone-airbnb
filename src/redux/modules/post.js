// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
// *** 액션 타입
const GET_POST = "GET_POST";
// *** 액션 생성 함수
const getPost = createAction(GET_POST, (postList) => ({ postList }));
// *** 초기값
const initialState = {

    list:[],
    locationId : null,
    locationName : null,
    accomoId: null,
    accomoTitle: null,
    accomoContent: null,
    accomoImg: null,
    accomoAdress: null,
    accomoInfo1: null,
    accomoInfo2: null,
    
};

// *** 미들웨어
// 서울 페이지 PostList
const getPostListDB = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios.get(`http://13.209.40.227/api/place/1/list`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      console.log(res)
      dispatch(getPost(res.data))
    })
    .catch((err) => {
      console.log("에러", err)
    })
  };
};
// *** 리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) => {
      return produce(state, (draft) => {
        draft.locationId = action.payload.locationId;
        draft.locationName = action.payload.locationName;
        draft.accomoId = action.payload.accomoId;
        draft.accomoTitle = action.payload.accomoTitle;
        draft.accomoContent = action.payload.accomoContent;
        draft.accomoImg = action.payload.accomoImg;
        draft.accomoAdress = action.payload.accomoAdress;
        draft.accomoInfo1 = action.payload.accomoInfo1;
        draft.accomoInfo2 = action.payload.accomoInfo2;
        // console.log(action.payload.locationId);
      });
    },
  },
  initialState
);
// *** 액션 생성 함수 export
const actionCreators = {
  getPostListDB,
};
export { actionCreators };