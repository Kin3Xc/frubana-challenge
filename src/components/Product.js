import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  margin: 0 0 12px;
  padding: 10px;
  border: 1px #f1c40f dashed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;

const Product = props => {
  const { product } = props;

  return (
    <Container>
      <div>
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
      </div>

      <div>
        <p>Quantity: {product.quantity}</p>
        <p>Total: {product.total}</p>
      </div>
    </Container>
  );
};

export default Product;
