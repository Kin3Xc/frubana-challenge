import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Aside from "./Aside";
import Content from "./Content";
import Menu from "./Menu";
import Orders from "../components/OrderList";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 260px 1fr;
  grid-gap: 14px;
`;

const Dashboard = props => {
  const { orders } = props;
  return (
    <Container>
      <Aside>
        <Menu />
      </Aside>
      <Content>
        <Orders orders={orders} />
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(Dashboard);
