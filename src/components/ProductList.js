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
const Action = styled.button`
  background-color: #2ecc71;
  border: 0;
  margin: 0 0 12px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
`;

class ProductList extends React.Component {
  state = {
    productSelected: []
  };

  handleOnClick = (product, index) => {
    this.props.onUpdatePercentage(product);
    let { productSelected } = this.state;
    productSelected.push(index);

    this.setState({ productSelected });
  };

  render() {
    const { products } = this.props;
    const { productSelected } = this.state;

    return (
      <ListContainer>
        {products.map((product, index) => (
          <List key={product._id}>
            <Product product={product} />
            {!productSelected.includes(index) ? (
              <Action onClick={() => this.handleOnClick(product, index)}>
                Alistar producto
              </Action>
            ) : null}
          </List>
        ))}
      </ListContainer>
    );
  }
}

export default ProductList;
