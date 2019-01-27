import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { CSVLink } from "react-csv";
import { data, headers } from "../../data/data";

class VariantTable extends Component {
  constructor() {
    super();
    this.state = {
      //   data: makeData()
    };
  }
  render() {
    // const { data } = this.state;
    console.log(data);

    return (
      <div>
        <CSVLink data={data}>Download me</CSVLink>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "Query Result",
              columns: [
                ...headers.map(header => ({
                  Header: header,
                  accessor: header,
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value),
                  style: { cursor: "pointer" }
                }))
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default VariantTable;
