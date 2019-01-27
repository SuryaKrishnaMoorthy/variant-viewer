import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Aux from "../../hoc/_Aux/_Aux";

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
        <Form onSubmit={this.onSubmit}>
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
          <div style={{ display: "flex" }}>
            <Button
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                width: "15%"
              }}
              onClick={this.clearText}
            >
              Clear
            </Button>
            <Button
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                width: "15%"
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Search;
