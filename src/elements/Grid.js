import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { width, padding, margin, bg, is_flex, _onClick, center, children } =
    props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  ${(props) => (props.padding ? `padding : ${props.padding}` : "")}
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")}
    ${(props) => (props.bg ? `bg : ${props.bg}` : "")}
    ${(props) => (props.center ? `text-align: center;` : "")}
    ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content: space-between`
      : ""}
    box-sizing:  border-box;
`;

export default Grid;
