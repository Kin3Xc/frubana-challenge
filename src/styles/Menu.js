import styled from "styled-components";

const ContainerMenu = styled.ul`
  padding: 0;
  h2 {
    text-align: center;
    color: #666;
    font-size: 18px;
  }
`;
const OptMenu = styled.li`
  padding: 12px;
  a {
    padding: 12px;
    text-decoration: none;
    color: #16a085;
    font-size: 16px;
    width: 100%;
    display: flex;
  }
  &:hover {
    background-color: #ecf0f1;
  }
`;
export { ContainerMenu, OptMenu };
