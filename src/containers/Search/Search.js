import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import "./Search.css";
class Search extends Component {
  state = {
    query: "",
    genoType: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  clearText = () => {
    this.setState({
      query: "",
      genoType: ""
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} className="Form">
          <FormGroup>
            <Input
              placeholder="Enter the SQL Command"
              type="textarea"
              name="query"
              id="query"
              value={this.state.query}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Genotype filters"
              type="textarea"
              name="genoType"
              id="genoType"
              value={this.state.genoType}
              onChange={this.onChange}
            />
          </FormGroup>
          <div className="ButtonDiv">
            <Button className="Button">Submit</Button>
            <Button className="Button" onClick={this.clearText}>
              Clear
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Search;
