import React from "react";
import styled from "styled-components";
import logo from "../logo.png";

const Image = styled.img`
  src: url(${props => props.src});
  width: 132px;
  height: auto;
  margin-left: 3%;
`;

const Logo = () => {
  return <Image src={logo} alt="logo" />;
};

export default Logo;
