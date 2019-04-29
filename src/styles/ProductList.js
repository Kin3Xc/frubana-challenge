import styled from "styled-components";

const ListContainer = styled.div`
  overflow: auto;
  height: auto;
  width: 100%;
  font-size: 16px;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;
const List = styled.div`
  display: grid;
  text-align: center;
  background: #fff;
  padding: 4px;
  margin: 0 0 16px 0;
`;
const Action = styled.button`
  background-color: #f39c12;
  border: 0;
  cursor: pointer;
  color: #fff;
  height: 32px;
`;
const Enlisted = styled.button`
  text-align: center;
  background-color: #27ae60;
  color: #fff;
  border: 0;
  height: 32px;
`;

export { ListContainer, List, Action, Enlisted };
