import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f8f8f8;
  text-align: center;
  width: 260px;
  height: calc(100vh - 58px);
`;

const Aside = props => {
  return <Container>{props.children}</Container>;
};

export default Aside;
