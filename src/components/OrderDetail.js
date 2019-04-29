import React from "react";
import ProductList from "./ProductList";
import { Container, Info, Products, NoData } from "../styles/OrderDetail";

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
