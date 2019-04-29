import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 208px);
`;

const Content = props => {
  return <Container>{props.children}</Container>;
};

export default Content;
