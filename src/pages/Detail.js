// Detail.js
// *** 패키지 import
import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Post from "../components/Post";
import WriteComment from "../components/AddComment";
import CommentList from "../components/CommentList";
import { _loadDetailView } from "../redux/modules/detailView";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { HiAcademicCap } from "react-icons/hi";


const Detail = (roomList, props) => {
  // const accomoid=props.match.params.accomoId;
  // // const [info, setInfo] = React.useState("")
  // const dispatch = useDispatch()

  // React.useEffect(() => {
  //   dispatch(_loadDetailView(accomoid));
  // }, [dispatch, accomoid]);
    
  
  // const comments = data.comments;
  const accom = roomList.match.params
  console.log(accom)
  return (
    <React.Fragment>
        <Test>
        <Navigation/>
        <Post/>
        <WriteComment accom={accom}/>
        <CommentList />
      </Test>
    </React.Fragment>
  );
};

const Test = styled.div`
  padding: 0 11vw;
`;


export default Detail;
