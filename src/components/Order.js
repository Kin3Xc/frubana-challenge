import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f1c40f;
  color: #fff;
  height: auto;
  margin: 0 0 12px;
  padding: 10px;
`;

const Order = props => {
  const { order } = props;

  return (
    <Container>
      <h2>{order.region_code}</h2>
      <p>{order.slot}</p>
      <p>
        <b>{order.user.name}</b>
      </p>
      <p>{order.routeId}</p>
    </Container>
  );
};

export default Order;
