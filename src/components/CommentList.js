import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { Text, Grid } from "../elements";
import { useParams } from "react-router";
import { actionCreators as commentActions } from "../redux/modules/comment";
import createPalette from "@material-ui/core/styles/createPalette";
import axios from "axios";


const CommentList = (props)=> {
    const { accomoId } = useParams();
    const dispatch = useDispatch();
    const[commentInfo, setCommentInfo]=useState([])


    useEffect(()=> {
        axios
        .get(`http://13.209.40.227/api/place/1/list/${accomoId}`)
        .then((response) => setCommentInfo(response.data.comments))
        // .then(response=> console.log(response.data.comments))
        
    },[]); 
    
    const postDelete = () => {
        const deleteCheck = window.confirm('후기를 삭제 하시겠습니까?')
        
        if (deleteCheck) {
            dispatch(commentActions.delCommentDB(props.commentId))
            window.alert("후기가 삭제 되었습니다.");
            window.location.reload()
        }
    }
console.log(commentInfo)
    return (
        <React.Fragment>
            <Wrap>
                { commentInfo.map((p,i)=> { 
                    
                    return (
                        <CommentItem key={i} {...p}>
                            </CommentItem>
                    )
                })}
     
            </Wrap>
        </React.Fragment>
    )
};

const CommentItem = (props) => {
    const { userName, commentContent} = props;
    return (
        <React.Fragment>
            <Grid margin="0px 0px 0px 24%" width="50%">
                <Box>
                    <Text margin="5px" padding="0"bold>{userName} </Text>
                    <Text margin="5px" padding="0"> {commentContent}</Text>
                </Box>
            </Grid>    
        </React.Fragment>

    )
}

const Wrap =  styled.div`
    display: flex;
    flex-direction: column-reverse;

`;

const Box = styled.div`
    display: flex;
`


const DeleteBtn = styled.button`
 width: 40px;
 height: 20px;
 background-color: #FF385C; 
 color: #ffffff;
 border: none;
 border-radius: 10px;
`

export default CommentList;