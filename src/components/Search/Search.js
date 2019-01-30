import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

import "./Search.css";

const Search = props => {
  return (
    <div>
      <Form onSubmit={e => props.onSubmit(e)} className="Form">
        <FormGroup>
          <Input
            placeholder="Enter the SQL Command"
            type="textarea"
            name="query"
            id="query"
            value={props.query}
            onChange={e => props.onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Genotype filters"
            type="textarea"
            name="genoType"
            id="genoType"
            value={props.genoType}
            onChange={e => props.onChange(e)}
          />
        </FormGroup>
        <div className="ButtonDiv">
          <Button className="Button">Submit</Button>
          <Button className="Button" onClick={props.clearText}>
            Clear
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Search;
