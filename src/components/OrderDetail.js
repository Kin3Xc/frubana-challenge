import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";

const Container = styled.div`
  color: #666;
`;
const Info = styled.div`
  padding: 10px;
  background-color: #ecf0f1;
`;
const Products = styled.div`
  padding: 12px;
  background-color: #f8f8f8;
`;

const OrderDetail = props => {
  const { order } = props;

  return (
    <Container>
      {order ? (
        <>
          <Info>
            <h2>Region: {order.region_code}</h2>
            <p>Slot: {order.slot}</p>
            <p>User: {order.user.name}</p>
          </Info>

          <Products>
            <h2>Lista de productos</h2>
            <ProductList
              onUpdatePercentage={props.onUpdatePercentage}
              products={order.products}
            />
          </Products>
        </>
      ) : (
        <p>No hay datos</p>
      )}
    </Container>
  );
};

export default OrderDetail;
