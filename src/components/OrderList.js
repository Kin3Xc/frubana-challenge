import React from "react";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import Status from "./StatusOrder";
import Admin from "./Admin";
import Filter from "./Filter";
import ProductList from "./ProductList";

import orderBy from "../utils/orderBy";
import filterOrders from "../utils/filter";
import enlistedProductsList from "../utils/enlistedProducts";
import updateOrders from "../utils/updateOrders";

import { Products } from "../styles/OrderDetail";

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
    unlistedProducts: [],
    options: [],
    filter: ""
  };

  componentWillReceiveProps(nextProps) {
    let { orders } = nextProps;
    let {
      productsSelected,
      routes,
      enlistedOrders,
      filter,
      unlistedProducts
    } = this.state;
    const options = [...new Set(orders.map(order => order.region_code))];

    if (productsSelected.length > 0) {
      let response = updateOrders(
        orders,
        productsSelected,
        routes,
        enlistedOrders
      );
      orders = response.orders;
      enlistedOrders = response.enlistedOrders;
    }

    if (filter) {
      if (filter !== "slot" && filter !== "routeId") {
        orders = filterOrders(filter, this.props.orders);
      } else {
        orders = orderBy(filter, this.state.orders);
      }
    }
    unlistedProducts = enlistedProductsList(productsSelected, orders);

    this.setState({ orders, enlistedOrders, options, unlistedProducts });
  }

  handleUpdatePercentage = (productsSelected, routes) => {
    let { order, unlistedProducts } = this.state;
    const { orders, enlistedOrders } = updateOrders(
      this.state.orders,
      productsSelected,
      routes,
      this.state.enlistedOrders
    );

    order.enlistedProducts += 1;

    if (order.enlistedProducts === order.products.length) {
      enlistedOrders.push(order);
    }

    unlistedProducts = enlistedProductsList(
      productsSelected,
      this.props.orders
    );

    this.setState({
      orders,
      order,
      enlistedOrders,
      productsSelected,
      routes,
      unlistedProducts
    });
  };

  handleOnClick = order => {
    if (!order.enlistedProducts) {
      order.enlistedProducts = 0;
    }

    this.setState({ order });
  };

  handleOnchange = e => {
    const value = e.target.value;
    let { orders } = this.props;

    if (value) {
      if (value !== "slot" && value !== "routeId") {
        orders = filterOrders(value, this.props.orders);
      } else {
        orders = orderBy(value, this.state.orders);
      }
    }

    this.setState({ orders, filter: value });
  };

  render() {
    const { order, orders, options, unlistedProducts } = this.state;

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
          {unlistedProducts.length ? (
            <Products>
              <h2>Productos sin ordenar</h2>
              <ProductList
                onUpdatePercentage={this.props.onUpdatePercentage}
                products={unlistedProducts}
                order={null}
              />
            </Products>
          ) : (
            <p>No hay productos</p>
          )}
        </ContainerOrderList>
      </>
    );
  }
}

export default Orders;
