import React from "react";
import Product from "./Product";

import { ListContainer, List, Action, Enlisted } from "../styles/ProductList";

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
            {order ? (
              !productsSelected.includes(product._id) ||
              !routes.includes(order.routeId) ? (
                <Action onClick={() => this.handleOnClick(product)}>
                  Alistar producto
                </Action>
              ) : (
                <Enlisted>Producto listo</Enlisted>
              )
            ) : null}
          </List>
        ))}
      </ListContainer>
    );
  }
}

export default ProductList;
