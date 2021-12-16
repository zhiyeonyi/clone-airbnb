// *** 패키지 import
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// *** 액션 타입
const IS_MODAL = "IS_MODAL";
const RE_MODAL = "RE_MODAL";

// *** 액션 생성 함수
const getModal = createAction(IS_MODAL, (modal) => ({ modal }));

// *** 초기값
const initialState = {
 isModal: false,
};
// *** 미들웨어
// 서울 페이지 PostList
const getModalDB = (modal) => {
  return function (dispatch, getState, {history}){
    console.log(modal)
    dispatch(getModal(modal))

  }
} 
const getPostListDB = (postId) => {
  return function (dispatch, getState, { history }) {};
};
// *** 리듀서
export default handleActions(
  {
    [IS_MODAL]: (state, action) => {
      return produce(state, (draft) => {
        console.log(action.payload.modal)
        draft.isModal = action.payload.modal;
      });

    },
  },
  initialState
);
// *** 액션 생성 함수 export
const actionCreators = {
  getModalDB,
  getPostListDB,
};
export { actionCreators };
