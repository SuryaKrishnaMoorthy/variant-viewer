import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import "./VariantTable.css";
import { CSVLink } from "react-csv";

// import { data, headers } from "../../data/data";

class VariantTable extends Component {
  render() {
    // if (this.props.data && this.props.headers) {
    const { data, headers } = this.props;
    // } else {
    //   const data = {};
    //   const headers = [];
    // }

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
          onFilteredChange={(filtered, column) =>
            this.props.onFilterChange(filtered)
          }
          filterable
          defaultFilterMethod={(filter, row) => {
            return String(row[filter.id]) === filter.value;
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
                      // row[filter.id].startsWith(filter.value) ||
                      // (row[filter.id].endsWith(filter.value) &&
                      // Changed to partial filter
                      String(row[filter.id].toLowerCase()).includes(
                        filter.value.toLowerCase()
                      )
                    );
                  },
                  style: { cursor: "pointer" }
                }))
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight Table"
        />
      </div>
    );
  }
}

export default VariantTable;
