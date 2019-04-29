import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./containers/Header";
import Dashboard from "./containers/Dashboard";

class App extends Component {
  componentDidMount() {
    document.title = "Frubana - Dashboard";
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
