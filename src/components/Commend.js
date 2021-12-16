import React from "react";
import styled from "styled-components";
import { Input, Button } from "../elements";

const CommendWrite = () => {
 return (
    <React.Fragment>
        <Wrap>
         <Input placeholder="후기를 작성해주세요."></Input>
         <Button margin = "0px 10px" width="100px">작성</Button>
        </Wrap> 
   </React.Fragment> 
 )
}

const Wrap = styled.div`
    display: flex;
`;

export default CommendWrite