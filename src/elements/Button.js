import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    _onClick,
    fontSize,
    width,
    minHeight,
    padding,
    border,
    borderRadius,
    color,
    backGround,
    children,
    display,
  } = props;

  const styles = {
    fontSize: fontSize,
    width: width,
    minHeight: minHeight,
    padding: padding,
    border: border,
    borderRadius: borderRadius,
    color: color,
    backGround: backGround,
    display: display,
  };

  return (
    <React.Fragment>
      <DefaultBtn {...styles} onClick={_onClick}>
        {children}
      </DefaultBtn>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  fontSize: "16px",
  width: "100%",
  minHeight: "auto",
  padding: "10px 10px",
  border: "1px solid #ffffff",
  borderRadius: "0px",
  backGround: "#ffffff",
  _onClick: () => {},
};

const DefaultBtn = styled.button`
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  min-height: 48px;
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: 8px;
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  background-color: ${(props) => props.backGround};
  box-sizing: boder-box;
  margin: 8px auto;
  text-align: center !important;
  line-height: 24px;
  cursor: point;
  &:hover {
    background-color: #ebebeb;
    border: 2px solid #ebebeb;
  }
`;

export default Button;
