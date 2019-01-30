import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Search from "../../components/Search/Search";
import VariantTable from "../../components/VariantTable/VariantTable";
import requests from "../../requests/requests";

class VariantExporter extends Component {
  state = {
    query: "",
    genoType: "",
    filter: {},
    data: [],
    headers: [""]
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitHandler = async e => {
    e.preventDefault();
    const { query, genoType } = this.state;
    const payload = await requests.postQueryRequest({
      query,
      genoType
    });

    console.log("payload", JSON.stringify(payload));

    this.setState({
      ...payload
    });
  };

  clearTextHandler = () => {
    this.setState({
      query: "",
      genoType: ""
    });
  };

  onFilterChangeRequest = async () => {
    const payload = await requests.filterRequest(this.state);
    this.setState({
      ...payload
    });
  };

  onFilteredChangeHandler = (filter, prevState) => {
    const filterObj = filter.reduce((acc, filObj) => {
      acc[filObj.id] = filObj.value;
      return acc;
    }, {});

    this.setState({
      filter: filterObj
    });
    this.onFilterChangeRequest();
  };

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log("prevProps, prevState", prevProps.data, prevState);
  //   this.onFilterChangeRequest();
  // }

  render() {
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
            <VariantTable
              onFilterChange={this.onFilteredChangeHandler}
              data={this.state.data}
              headers={this.state.headers}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VariantExporter;
