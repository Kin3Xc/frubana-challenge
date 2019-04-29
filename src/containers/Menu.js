import React from "react";
import { ContainerMenu, OptMenu } from "../styles/Menu";

const Menu = () => {
  return (
    <ContainerMenu>
      <h2>Dashboard</h2>
      <OptMenu>
        <a href="/">Inicio</a>
      </OptMenu>
    </ContainerMenu>
  );
};

export default Menu;
