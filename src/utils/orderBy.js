const orderBy = (orderby, orders) => {
  return orders.sort((a, b) =>
    a[orderby] > b[orderby] ? 1 : b[orderby] > a[orderby] ? -1 : 0
  );
};

export default orderBy;
