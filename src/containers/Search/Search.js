import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import "./Search.css";
class Search extends Component {
  state = {
    query: ""
  };

  onChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.query);
  };

  clearText = () => {
    this.setState({
      query: ""
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
              name="queryText"
              id="queryText"
              value={this.state.query}
              onChange={this.onChange}
            />
          </FormGroup>
          <div className="ButtonDiv">
            <Button className="Button" onClick={this.clearText}>
              Clear
            </Button>
            <Button className="Button">Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Search;
