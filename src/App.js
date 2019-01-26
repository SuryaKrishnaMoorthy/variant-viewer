import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Inside APP</p>
        </Layout>
      </div>
    );
  }
}

export default App;
