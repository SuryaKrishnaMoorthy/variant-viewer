import React from "react";
import { InputGroup, Input, Button } from "reactstrap";

const Search = props => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="Search by SQL COMMAND" />
        <Button>Search</Button>
      </InputGroup>
    </div>
  );
};

export default Search;
