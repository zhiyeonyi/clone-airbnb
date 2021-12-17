import React, {useState} from "react";
import styled from "styled-components";
import { Text,Input, Button } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { addCommentDB } from "../redux/modules/comment";

const CommentWrite = (props) => {
    

 return (
    <React.Fragment>
        <Text bold size="18px">후기</Text>   
        <Wrap>
         <Input borderRadius="10px" placeholder="100자 이내로 후기를 작성해주세요."></Input>
         <Button margin = "0px 10px" width="100px">작성</Button>
        </Wrap> 
   </React.Fragment> 
 )
}

const Wrap = styled.div`
    display: flex;
    margin: 0px 50px 20px 0px;
`;

export default CommentWrite