import React, { Component } from "react";

import "./Layout.css";
import Aux from "../../hoc/_Aux/_Aux";
import NavBar from "../NavBar/NavBar";
import VariantExporter from "../../containers/VariantExporter/VariantExporter";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <VariantExporter />
      </Aux>
    );
  }
}

export default Layout;
