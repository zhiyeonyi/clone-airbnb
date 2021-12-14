import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Logo = (props) => {
  const { logoColor } = props;
  return (
    <React.Fragment>
      <LogoImage
        fill={logoColor}
        onClick={() => {
          history.push("/");
        }}
        id="image"
        src="https://blog.kakaocdn.net/dn/db1TIh/btqVctamgQ5/V1wyXJu1iW2OmPoQfgKGDk/img.png"
      />
    </React.Fragment>
  );
};

Logo.defaultProps = {
  logoColor: "#FF5A5F",
};

const LogoImage = styled.image`
  width: 120px;
  height: 40px;
`;

export default Logo;
