import React from "react";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import Status from "./StatusOrder";

import {
  ContainerOrderList,
  ListContainer,
  List,
  Action,
  NoData
} from "../styles/OrderList";

class Orders extends React.Component {
  state = {
    orders: [],
    order: null,
    enlistedOrders: [],
    routes: [],
    productsSelected: []
  };

  componentWillReceiveProps(nextProps) {
    let { orders } = nextProps;
    const { productsSelected, routes } = this.state;

    if (productsSelected.length) {
      orders = this.updateOrders(orders, productsSelected, routes);
    }
    this.setState({ orders });
  }

  handleUpdatePercentage = (productsSelected, routes) => {
    let { order, enlistedOrders } = this.state;
    const orders = this.updateOrders(
      this.state.orders,
      productsSelected,
      routes
    );

    order.enlistedProducts += 1;

    if (order.enlistedProducts === order.products.length) {
      enlistedOrders.push(order);
    }

    this.setState({ orders, order, enlistedOrders, productsSelected, routes });
  };

  updateOrders(orders, productsSelected, routes) {
    orders.forEach((order, index) => {
      if (routes.includes(order.routeId)) {
        let products = order.products.filter(product =>
          productsSelected.includes(product._id)
        );
        orders[index].enlistedProducts = products ? products.length : 0;
      }
    });
    return orders;
  }

  handleOnClick = order => {
    if (!order.enlistedProducts) {
      order.enlistedProducts = 0;
    }

    this.setState({ order });
  };

  render() {
    const { order, orders } = this.state;

    return (
      <ContainerOrderList>
        <ListContainer>
          {orders && orders.length ? (
            orders.map(order => (
              <List key={order._id}>
                <Order order={order} />
                <Status
                  numProducts={order.products.length}
                  enlistedProducts={order.enlistedProducts}
                />
                <Action onClick={() => this.handleOnClick(order)}>
                  Seleccionar
                </Action>
              </List>
            ))
          ) : (
            <NoData>Esperando órdenes...</NoData>
          )}
        </ListContainer>
        <OrderDetail
          onUpdatePercentage={this.handleUpdatePercentage}
          order={order}
        />
      </ContainerOrderList>
    );
  }
}

export default Orders;
