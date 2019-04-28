import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f1c40f;
  color: #fff;
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Status = props => {
  const { enlistedProducts, numProducts } = props;

  return (
    <Container>
      {enlistedProducts ? (
        <p>
          <b>{Math.round((enlistedProducts * 100) / numProducts)}%</b>{" "}
          Completado
        </p>
      ) : (
        <p>Sin alistar</p>
      )}
    </Container>
  );
};

export default Status;
