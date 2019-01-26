import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Search = props => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Input
            placeholder="Enter the SQL Command"
            type="textarea"
            name="text"
            id="exampleText"
          />
        </FormGroup>
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
      </Form>
    </div>
  );
};

export default Search;
