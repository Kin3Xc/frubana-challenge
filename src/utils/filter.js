const filterOrders = (filter, orders) => {
  return orders.filter(order => order.region_code === filter);
};

export default filterOrders;
