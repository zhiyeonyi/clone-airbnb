import React from "react";
import styled from "styled-components";
import { Button, Text } from "../elements";
import Hbutton from "./Hbutton";
import Logo from "../elements/Logo";
import { Link, NavLink, useHistory } from "react-router-dom";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import { dropRight } from "lodash";




const Navigation = () => {
    return(
        <React.Fragment>
            <Wrap>
                <Width>
                    <Logo changeColor="#FF385C" />
                    
                    <Middle>
                        <Button border= "1px solid #000000" >검색시작하기 <BiSearch color="#FF385C"/></Button>
                        {/* <Button></Button> */}
                    </Middle>

                    <Right>
                      <Text bold color="black">호스트 되기</Text>
                      <HiOutlineGlobeAlt margin="0px 10px 5px 10px"size="16px"  color="black"/>
                      <Hbutton></Hbutton>
                    </Right>
                </Width>
            </Wrap>
        </React.Fragment>
    )
}

const Wrap = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff
`;

const Width = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Middle = styled.div`
`;

const Right = styled.div`
    display: flex;
    align-item: center;
`;
export default Navigation;