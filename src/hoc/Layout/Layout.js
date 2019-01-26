import React, { Component } from "react";
import Aux from "../_Aux/_Aux";
import NavBar from "../../containers/NavBar/NavBar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar>NavBar</NavBar>
        <div>Main Content</div>
      </Aux>
    );
  }
}

export default Layout;
