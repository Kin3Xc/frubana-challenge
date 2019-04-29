import styled from "styled-components";

const Container = styled.div`
  color: #666;
`;
const Info = styled.div`
  padding: 10px;
  background-color: #ecf0f1;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;
const Products = styled.div`
  padding: 12px;
  background-color: #f8f8f8;
  overflow: auto;
  height: 63vh;
`;
const NoData = styled.div`
  text-align: center;
`;

export { Container, Info, Products, NoData };
