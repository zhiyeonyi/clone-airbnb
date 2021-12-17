import { createAction, handleActions } from "redux-actions";
import axios from "axios";


//action
const SET_COMMENT = "user/SET_COMMENT"
const ADD_COMMENT = "user/ADD_COMMENT"

//action creater
const setComment = createAction(SET_COMMENT, (comment) => ({ comment }));
const addComment = createAction(ADD_COMMENT,(userName,commentContent)=>({userName,commentContent,}));

//initialState
const initialState={
    list:{},
}

//thunk
export const addCommentDB = (accomoId, userId, userName, commentContent,rating) => {
    return function(dispatch, getState,{history}) {
        axios.post("http://13.209.40.227/api/:accomoId/comments",{
            accomoId: accomoId,
            userId : userId,
            userName:userName,
            commentContent : commentContent,
            rating : rating,
        })
        .then((res) => {
           console.log(res)
           window.alert("후기가 등록되었습니다.");
          })
    }
}

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
  addComment,
};