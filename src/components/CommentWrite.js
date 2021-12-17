import React from "react";
import styled from "styled-components";
import { Text,Input, Button } from "../elements";

const CommentWrite = (props) => {
 return (
    <React.Fragment>
        <Text bold size="18px">후기</Text>   
        <Wrap>
         <Input borderRadius="10px" placeholder="후기를 작성해주세요."></Input>
         <Button margin = "0px 10px" width="100px">작성</Button>
        </Wrap> 
   </React.Fragment> 
 )
}

const Wrap = styled.div`
    display: flex;
`;

export default CommentWrite