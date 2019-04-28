import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ListContainer = styled.div`
  overflow: auto;
  height: auto;
  width: 100%;
  font-size: 16px;
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
  background-color: #16a085;
  border: 0;
  margin: 0 0 12px;
  cursor: pointer;
  color: #fff;
`;
const Enlisted = styled.div`
  text-align: center;
  background-color: #27ae60;
  color: #fff;
  border: 0;
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class ProductList extends React.Component {
  state = {
    productsSelected: [],
    routes: []
  };

  handleOnClick = product => {
    const { order } = this.props;
    let { productsSelected, routes } = this.state;

    this.props.onUpdatePercentage(productsSelected, routes);

    if (!productsSelected.includes(product._id)) {
      productsSelected.push(product._id);
    }
    if (!routes.includes(order.routeId)) {
      routes.push(order.routeId);
    }

    this.setState({ productsSelected });
  };

  render() {
    const { products, order } = this.props;
    const { productsSelected, routes } = this.state;

    return (
      <ListContainer>
        {products.map((product, index) => (
          <List key={product._id}>
            <Product product={product} />
            {!productsSelected.includes(product._id) ||
            !routes.includes(order.routeId) ? (
              <Action onClick={() => this.handleOnClick(product)}>
                Alistar producto
              </Action>
            ) : (
              <Enlisted>Producto listo</Enlisted>
            )}
          </List>
        ))}
      </ListContainer>
    );
  }
}

export default ProductList;
