import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./VariantTable.css";
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

    return (
      <div>
        <CSVLink
          data={data}
          headers={headers}
          filename={"query-results.csv"}
          className="btn DownloadButton"
        >
          Download
        </CSVLink>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => {
            return (
              String(row[filter.id]) === filter.value ||
              String(row[filter.id]).includes(filter.value)
            );
          }}
          columns={[
            {
              Header: "Query Result",
              columns: [
                ...headers.map(header => ({
                  Header: () => (
                    <span className="text-info bold">
                      <i className="fa-tasks" /> {header}
                    </span>
                  ),
                  accessor: header,
                  filterMethod: (filter, row) => {
                    return (
                      row[filter.id].startsWith(filter.value) &&
                      row[filter.id].endsWith(filter.value)
                    );
                  },
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
