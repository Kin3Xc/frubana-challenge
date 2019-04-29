import React from "react";
import ProductList from "./ProductList";
import { Container, Info, Products, NoData } from "../styles/OrderDetail";

class OrderDetail extends React.Component {
  state = {
    order: null
  };

  componentWillReceiveProps(nextProps) {
    const { order, products } = nextProps;
    this.setState({ order, products });
  }

  onClickShowAlProducts = () => {
    const { showProducts } = this.state;
    this.setState({ showProducts: !showProducts });
  };

  render() {
    const { order } = this.state;

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
                onUpdatePercentage={this.props.onUpdatePercentage}
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
  }
}

export default OrderDetail;
