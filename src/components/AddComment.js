import React from "react";
import styled from "styled-components";
import { Text } from "../elements";
import axios from "axios";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const WriteComment = (props) => {
  const { accomoId } = useParams();
  const dispatch = useDispatch();

  const [commentContent, setComment] = React.useState('');
  const [userId, setUserId] = React.useState(0);
  const [userName, setUserName] = React.useState('')

  React.useEffect( ()=> {
    const token = localStorage.getItem("user_token");
    // console.log(token)

    axios.get(`http://13.209.40.227/api/users/me`, {
      headers: { authorization: "Bearer "+ token },
    })
    .then((res) => {
      console.log(res)
      setUserId(res.data.userId)
      setUserName(res.data.userName)
    })
    .catch((err) => {
      console.log("에러", err)
    })
  },[]);
  
  const cmtOnChange = (e) => {
    setComment(e.target.value);
  }
 
  const writeComment = () => {
    dispatch(commentActions.addCommentDB(accomoId, userId, userName, commentContent))
    window.location.reload();
  }
 

  return (
    <React.Fragment>
      <Text bold size="18px">후기</Text>
      <Wrap>
      <Input 
         placeholder="100자 이내로 후기를 작성해주세요." 
         onChange={cmtOnChange} 
         value={commentContent}
          maxLength="100"
          >
          </Input>
          <Button onClick={writeComment} >작성</Button>
    </Wrap>
    </React.Fragment>
  )
};

const Wrap = styled.div`
    display: flex;
    margin: 0px 50px 20px 0px;
`;

const Input = styled.input`
    border: 1px solid #212121;
    width: 60%;
    padding: 12px 4px;
    border-radius: 10px;
    box-sizing: border-box;
`

const Button = styled.button`
 background-color: #FF385C; 
 color: #ffffff;
 border: none;
 border-radius: 10px;
 width: 100px;
 margin: 0px 10px;
 cursor: pointer;
 type: submit;
`

export default WriteComment;