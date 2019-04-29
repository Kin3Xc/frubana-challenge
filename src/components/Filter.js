import React from "react";
import { Container, Select } from "../styles/Filter";

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
        <Select onChange={this.onChange}>
          <option value="">:::: Ordenar por ::::</option>
          <option value="routeId">Ruta</option>
          <option value="slot">Slot</option>
        </Select>
      </Container>
    );
  }
}

export default Filter;
