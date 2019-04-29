import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-right: 12px;
  margin: 17px 0 25px 0;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  div {
    height: 111px;
    background-color: #2ecc71;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { Container, Info };
