import getUnique from "./unique";

const enlistedProductsList = (productsSelected, orders) => {
  let allProducts = [];
  orders.forEach(order => {
    if (order.products) {
      order.products.forEach(prod => allProducts.push(prod));
    }
  });
  const uniquesProducts = getUnique(allProducts, "_id");
  return uniquesProducts.filter(prod => !productsSelected.includes(prod._id));
};

export default enlistedProductsList;
