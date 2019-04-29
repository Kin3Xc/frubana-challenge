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
  grid-template-columns: 1fr 16%;
`;
const Action = styled.button`
  background-color: #16a085;
  border: 0;
  margin: 0 0 12px;
  cursor: pointer;
  color: #fff;
`;
const Enlisted = styled.div`
  text-align: center;
  background-color: #27ae60;
  color: #fff;
  border: 0;
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { ListContainer, List, Action, Enlisted };
