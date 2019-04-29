import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";

const Container = styled.div`
  color: #666;
`;
const Info = styled.div`
  padding: 10px;
  background-color: #ecf0f1;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;
const Products = styled.div`
  padding: 12px;
  background-color: #f8f8f8;
  overflow: auto;
  height: 63vh;
`;
const NoData = styled.div`
  text-align: center;
`;

const OrderDetail = props => {
  const { order } = props;

  return (
    <Container>
      {order ? (
        <>
          <Info>
            <h2>Orden</h2>
            <p>Region: {order.region_code}</p>
            <p>Slot: {order.slot}</p>
            <p>User: {order.user.name}</p>
          </Info>

          <Products>
            <h2>Lista de productos</h2>
            <ProductList
              onUpdatePercentage={props.onUpdatePercentage}
              products={order.products}
              order={order}
            />
          </Products>
        </>
      ) : (
        <NoData>
          <p>No hay orden seleccionada</p>
        </NoData>
      )}
    </Container>
  );
};

export default OrderDetail;
