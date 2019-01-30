import React from "react";

import "./Layout.css";
import Aux from "../../hoc/_Aux/_Aux";
import NavBar from "../NavBar/NavBar";
import VariantExporter from "../../containers/VariantExporter/VariantExporter";

const Layout = props => {
  return (
    <Aux>
      <NavBar />
      <VariantExporter />
    </Aux>
  );
};

export default Layout;
