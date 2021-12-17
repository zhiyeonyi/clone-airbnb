import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { apis } from "../../shared/api";

//action
const SET_COMMENT = "user/SET_COMMENT"
const ADD_COMMENT = "user/ADD_COMMENT"
const DELETE_COMMENT="user/DELETE_COMMENT"

const LOADING = "USER/LOADING";


//action creater
const setComment = createAction(SET_COMMENT, (comment) => ({ comment }));
const addComment = createAction(ADD_COMMENT,(userName,commentContent)=>({userName,commentContent,}));
const deleteComment = createAction(DELETE_COMMENT,(userName)=>({userName}));

const loading = createAction(LOADING,(is_loading) => ({is_loading}));

//initialState
const initialState={
    list:{},
    is_loading: false,
}

//thunk
export const addCommentDB = (accomoId, userId, userName, commentContent,rating) => {
    return function(dispatch, getState,{history}) {
        apis.addComment(accomoId,userName,commentContent)
        .then((res) => {
           console.log(res)
           history.replace(`/`)
           window.alert("후기가 등록되었습니다.");
          })
    }
}

export const delCommentDB = (accomoId, commentId) => {
  return function(dispatch, getState, { history }){
    apis.delComment(accomoId,commentId)
    .then((res) => {
      alert(res);
      window.alert("삭제가 완료되었습니다.")
      window.location.reload();
    });
  };
};

//reducer
export default handleActions(
    {
      [SET_COMMENT]: (state, action) => {
        return {
          ...state,
          list: action.payload.list,
        };
        },
    },
    initialState
);

export const actionCreators = {
  addCommentDB,
  delCommentDB,
};