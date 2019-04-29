import React from "react";
import { Container, Info } from "../styles/Admin";

class Admin extends React.Component {
  render() {
    const { productsSelected, enlistedOrders, routes } = this.props;

    return (
      <Container>
        <Info>
          <div>{productsSelected.length || 0} Productos listos</div>
          <div>{enlistedOrders.length || 0} Órdenes completadas</div>
          <div>{routes.length || 0} Rutas</div>
        </Info>
      </Container>
    );
  }
}

export default Admin;
