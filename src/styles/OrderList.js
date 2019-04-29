import styled from "styled-components";

const ContainerOrderList = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 1fr;
  grid-gap: 22px;
  margin-top: 12px;
  height: 100%;
  width: 100%;
  color: #666;
`;
const ListContainer = styled.div`
  overflow: auto;
  height: 77vh;
  width: 100%;
  h2,
  p {
    padding: 0;
    margin: 0;
  }
`;
const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 130px 120px;
`;
const Action = styled.button`
  background-color: #f39c12;
  border: 0;
  margin: 0 0 12px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
`;
const NoData = styled.div`
  text-align: center;
`;
const Switch = styled.div`
  color: #1abc9c;
  padding: 10px 0;
  margin-top: 12px;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
  p {
    width: 120px;
    cursor: pointer;
    &:hover {
      color: #16a085;
    }
  }
  hr {
    height: 1px;
    color: #ecf0f1;
    background-color: #ecf0f1;
    border: none;
  }
`;

export { ContainerOrderList, ListContainer, List, Action, NoData, Switch };
