import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
`;

const Select = styled.select`
  padding: 8px;
  height: 32px;
  width: 100%;
`;

class Filter extends React.Component {
  onChange = e => {
    this.props.onChange(e);
  };

  render() {
    const { options } = this.props;

    return (
      <Container>
        <Select onChange={this.onChange}>
          <option value="">:::: Filtrar por region ::::</option>
          {options.map((opt, index) => (
            <option key={index}>{opt}</option>
          ))}
        </Select>
      </Container>
    );
  }
}

export default Filter;
