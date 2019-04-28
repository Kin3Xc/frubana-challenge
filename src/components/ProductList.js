import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ListContainer = styled.div`
  overflow: auto;
  height: auto;
  width: 100%;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 16%;
`;
const Button = styled.button`
  background-color: #2ecc71;
  border: 0;
  margin: 0 0 12px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
`;

const handleOnClick = props => {
  console.log(props);
};

const ProductList = props => {
  const { products } = props;

  return (
    <ListContainer>
      {products.map(product => (
        <List key={product._id}>
          <Product product={product} />
          <Button onClick={() => handleOnClick(product)}>
            Alistar producto
          </Button>
        </List>
      ))}
    </ListContainer>
  );
};

export default ProductList;
