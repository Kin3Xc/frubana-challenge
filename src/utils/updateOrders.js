const updateOrders = (orders, productsSelected, routes, enlistedOrders) => {
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
};

export default updateOrders;
