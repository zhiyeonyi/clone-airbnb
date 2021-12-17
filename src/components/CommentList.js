import React from "react"
import styled from "styled-components"
import { Text } from "../elements";

const CommentList = ()=> {
    return (
        <React.Fragment>
            <Wrap>
                <CommentBox>
                    <Text size="18px">ID넣어용</Text>
                    <Text size="16px">여기 친구랑 여행가기 딱좋아요 ㅎㅎ</Text>
                </CommentBox>
                <CommentBox>
                    <Text size="18px">ID넣어용</Text>
                    <Text size="16px">하하하하하하</Text>
                </CommentBox>
            </Wrap>
        </React.Fragment>
    )
};

const Wrap =  styled.div`
    display: flex;

`;

const CommentBox = styled.div`
    border: 2px solid gray;
    border-radius: 10px;
   
    padding: 30px;
    margin: 10px 20px 15px 0;
    overflow: hidden;
`;

export default CommentList;