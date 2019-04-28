import React from "react";
import styled from "styled-components";

import Aside from "./Aside";
import Content from "./Content";
import Orders from "../components/OrderList";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 260px 1fr;
  grid-gap: 14px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Aside>Menu</Aside>
      <Content>
        <Orders />
      </Content>
    </Container>
  );
};

export default Dashboard;
