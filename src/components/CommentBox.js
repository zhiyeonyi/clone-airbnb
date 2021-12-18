import React from "react";
import styled from "styled-components";

import { Text } from "../elements";
import { AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router";

const CommentBox = (comments) => {
    const history = useHistory();
    const commentBox = comments.;
            console.log(commentBox)
            console.log();

    return (
        <React.Fragment>
            <Box>
                <Text>id</Text>
                <Text>comment</Text>    
            </Box>
            <DeleteBtn/>
        </React.Fragment>

    )
};

const Box = styled.div`
    border: 2px solid gray;
    border-radius: 10px;
   
    padding: 30px;
    margin: 10px 20px 15px 0;
    overflow: hidden;
`;

const DeleteBtn = styled.button`
 width: 30px;
 height: 30px;
 background-color: #FF385C; 
 color: #ffffff;
 border: none;
 border-radius: 10px;
`

export default CommentBox;