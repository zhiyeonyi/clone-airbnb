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
// export const addCommentDB = (accomoId, userId, userName, commentContent) => {
//     return function(dispatch, getState,{history}) {
//         apis.addComment(accomoId, userId, userName, commentContent)
//         .then((res) => {
//            console.log(res)
//            history.replace(`/`)
//            window.alert("후기가 등록되었습니다.");
//           })
//     }
// }

const addCommentDB = (accomoId, userId, userName, commentContent) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");
    console.log(accomoId, userId, userName, commentContent)
 
    axios.post(`http://13.209.40.227/api/${accomoId}/comments`, {
      accomoId: accomoId, userId: userId, userName: userName, commentContent: commentContent
    },{
      headers: { authorization: "Bearer " + token },
    } )
    .then((res) => {
      console.log(res)
      // dispatch(getComment(accomoId))
    })
    .catch((err) => {
      console.log("에러", err)
    })
  };
};

// const getComment = (accomoId) => {
//   return function (dispatch, getState, { history }) {
//     const token = localStorage.getItem("user_token");
//     axios
//     .get(`http://13.209.40.227/api/place/1/list/${accomoId}`,{
//       headers: { authorization: "Bearer " + token },
//     } )
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log("에러", err)
//     })
//   };
// };


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

const getUserInfoDB = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("user_token");

    axios.get(`http://13.209.40.227/api/users/me`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log("에러", err)
    })
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
  getUserInfoDB,
};