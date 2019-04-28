import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Order from "./Order";
import OrderDetail from "./OrderDetail";

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 22px;
  margin-top: 12px;
  height: 100%;
  width: 100%;
`;
const ListContainer = styled.div`
  overflow: auto;
  height: auto;
  width: 100%;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
`;

const Button = styled.button`
  background-color: #f39c12;
  border: 0;
  margin: 0 0 12px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
`;

class OrderList extends React.Component {
  state = {
    order: null
  };

  handleOnClick = order => {
    console.log(order);
    this.setState({ order });
  };

  render() {
    const { order } = this.state;
    const { orders } = this.props;

    return (
      <Container>
        <ListContainer>
          {orders.map(order => (
            <List key={order._id}>
              <Order order={order} />
              <Button onClick={() => this.handleOnClick(order)}>
                Seleccionar
              </Button>
            </List>
          ))}
        </ListContainer>
        <OrderDetail order={order} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});
export default connect(mapStateToProps)(OrderList);
