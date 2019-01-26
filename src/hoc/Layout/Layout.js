import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Aux from "../_Aux/_Aux";
import NavBar from "../../containers/NavBar/NavBar";
import Search from "../../containers/Search/Search";
import VariantTable from "../../containers/VariantTable/VariantTable";

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
              <VariantTable />
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default Layout;
