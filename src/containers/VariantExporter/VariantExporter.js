import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Search from "../../components/Search/Search";
import VariantTable from "../../components/VariantTable/VariantTable";
import requests from "../../requests/requests";

class VariantExporter extends Component {
  state = {
    query: "",
    genoType: "",
    filter: {}
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitRequest = async () => {
    await requests.postQueryRequest(this.state);
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  clearTextHandler = () => {
    this.setState({
      query: "",
      genoType: ""
    });
  };

  onFilterChangeRequest = async () => {
    await requests.filterRequest(this.state);
  };

  onFilteredChangeHandler = (filter, prevState) => {
    const filterObj = filter.reduce((acc, filObj) => {
      acc[filObj.id] = filObj.value;
      return acc;
    }, {});

    this.setState({
      filter: filterObj
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps, prevState", prevProps.data, prevState);
    this.onFilterChangeRequest();
  }

  render() {
    console.log("render", this.state.filter);

    return (
      <Container>
        <Row>
          <Col className="Col">
            <Search
              query={this.state.query}
              genoType={this.state.genoType}
              onChange={this.onChangeHandler}
              onSubmit={this.onSubmitHandler}
              clearText={this.clearTextHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <VariantTable onFilterChange={this.onFilteredChangeHandler} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VariantExporter;
