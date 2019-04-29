import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.div`
  background-color: #ecf0f1;
  height: 58px;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;
