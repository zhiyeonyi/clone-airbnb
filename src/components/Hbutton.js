import React from "react";
import styled from "styled-components";

import Hmodal from "./Hmodal";

const Hbutton = () => {
  // 모달 기본 세팅 true, false로 열고 닫아주기 위해 변수 지정
  const [firstModalStatus, setFirstModalStatus] = React.useState(false);
  // 버튼 클릭 시 모달창 활성화 시키기 위한 함수(위 변수를 true로 변환)
  const firstModalOpen = () => {
    setFirstModalStatus(true);
  };
  console.log(firstModalStatus);
  return (
    <React.Fragment>
      <div>
        <Container onClick={firstModalOpen}>icon</Container>
        {firstModalStatus && (
          <Hmodal
            modal={firstModalStatus}
            setFirstModalStatus={setFirstModalStatus}
          ></Hmodal>
        )}
      </div>
    </React.Fragment>
  );
};

const Container = styled.button`
  width: 6rem;
  height: 3rem;
  border: 1px solid #dddddd;
  border-radius: 3rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 5.5rem; */
  cursor: pointer;
`;

export default Hbutton;
