import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Aux from "../_Aux/_Aux";
import NavBar from "../../containers/NavBar/NavBar";
import Search from "../../containers/Search/Search";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar>NavBar</NavBar>
        <Container>
          <Row>
            <Col>
              <Search />
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Table here</div>
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default Layout;
