import React from "react";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import Status from "./StatusOrder";
import Admin from "./Admin";
import Filter from "./Filter";

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
    productsSelected: [],
    options: [],
    filter: ""
  };

  componentWillReceiveProps(nextProps) {
    let { orders } = nextProps;
    let { productsSelected, routes, enlistedOrders, filter } = this.state;
    const options = [...new Set(orders.map(order => order.region_code))];

    if (productsSelected.length > 0) {
      let response = this.updateOrders(
        orders,
        productsSelected,
        routes,
        enlistedOrders
      );
      orders = response.orders;
      enlistedOrders = response.enlistedOrders;
    }

    if (filter) {
      orders = this.filterOrders(filter);
    }

    this.setState({ orders, enlistedOrders, options });
  }

  handleUpdatePercentage = (productsSelected, routes) => {
    let { order } = this.state;
    const { orders, enlistedOrders } = this.updateOrders(
      this.state.orders,
      productsSelected,
      routes,
      this.state.enlistedOrders
    );

    order.enlistedProducts += 1;

    if (order.enlistedProducts === order.products.length) {
      enlistedOrders.push(order);
    }

    this.setState({ orders, order, enlistedOrders, productsSelected, routes });
  };

  updateOrders(orders, productsSelected, routes, enlistedOrders) {
    orders.forEach((order, index) => {
      if (routes.includes(order.routeId)) {
        let products = order.products.filter(product =>
          productsSelected.includes(product._id)
        );
        orders[index].enlistedProducts = products ? products.length : 0;
      }
    });
    enlistedOrders = orders.filter(
      order => order.enlistedProducts === order.products.length
    );
    return { orders, enlistedOrders };
  }

  handleOnClick = order => {
    if (!order.enlistedProducts) {
      order.enlistedProducts = 0;
    }

    this.setState({ order });
  };

  handleOnchange = e => {
    const filter = e.target.value;
    let { orders } = this.props;

    if (filter) {
      orders = this.filterOrders(filter);
    }

    this.setState({ orders, filter });
  };

  filterOrders = filter => {
    let { orders } = this.props;
    return orders.filter(order => order.region_code === filter);
  };

  render() {
    const { order, orders, options } = this.state;

    return (
      <>
        <Admin {...this.state} />
        <ContainerOrderList>
          <ListContainer>
            {orders.length ? (
              <Filter options={options} onChange={this.handleOnchange} />
            ) : null}
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
      </>
    );
  }
}

export default Orders;
