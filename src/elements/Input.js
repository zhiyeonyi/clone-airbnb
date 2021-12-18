import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    maxLength,
    borderRadius,
    children,
    label,
    placeholder,
    _onChange,
    _onKeyUp,
    type,
    multiLine,
    postMultiLine,
    postInput,
    rows,
    value,
    is_submit,
    onSubmit,
  } = props;

  if (multiLine) {
    return (
      <>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={rows}
          placeholder={placeholder}
          onKeyUp={_onKeyUp}
          onChange={_onChange}
          maxLength={maxLength}
        >
          {children}
        </ElTextarea>
      </>
    );
  }

  if (postMultiLine) {
    return (
      <>
        {label && <Text margin="0px">{label}</Text>}
        <PTextarea
          rows={rows}
          placeholder={placeholder}
          onKeyUp={_onKeyUp}
          onChange={_onChange}
          maxLength={maxLength}
        >
          {children}
        </PTextarea>
      </>
    );
  }

  if (postInput) {
    return (
      <>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <PlInput
            type={type}
            placeholder={placeholder}
            onKeyUp={_onKeyUp}
            onChange={_onChange}
            value={value}
            maxLength={maxLength}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <PlInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            onKeyUp={_onKeyUp}
            maxLength={maxLength}
          />
        )}
      </>
    );
  }

  return (
    <React.Fragment>
      <>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
          maxLength={maxLength}
            type={type}
            placeholder={placeholder}
            onKeyUp={_onKeyUp}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            onKeyUp={_onKeyUp}
            maxLength={maxLength}
          />
        )}
      </>
    </React.Fragment>
  );
};

Input.defaultProps = {
  maxLength: null,
  children: null,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  multiLine: false,
  rows: "",
  is_submit: false,
  borderRadius: "10px",
  onSubmit: () => {},
  _onChange: () => {},
  _onBlur: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 60%;
  ${(props) => (props.height ? `height : ${props.height};` : "")}
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: ${(props) => props.borderRadius};
`;

const PlInput = styled.input`
  border: 1px solid #212121;
  width: 40%;
  ${(props) => (props.height ? `height : ${props.height};` : "")}
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 60%;
  resize: none;
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => (props.value ? `value : ${props.value};` : "")}
`;

const PTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 40%;
  resize: none;
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => (props.value ? `value : ${props.value};` : "")}
`;

export default Input;
