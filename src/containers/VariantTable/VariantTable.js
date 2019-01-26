import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class VariantTable extends Component {
  constructor() {
    super();
    this.state = {
      //   data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          //   SELECT chrom,start,end,ref,alt,gene,clinvar_pathogenic,clinvar_disease_name FROM variants WHERE clinvar_disease_name NOT NULL;
          // header, login button, SQL query text box + submit button, table of results w/ filter functions
          columns={[
            {
              Header: "Query Result",
              columns: [
                {
                  Header: "Chrom",
                  accessor: "firstName",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                },
                { Header: "start" },
                { Header: "end" },
                { Header: "ref" },
                { Header: "gene" },
                { Header: "clinvar_pathogenic" },
                { Header: "clinvar_disease_name" }
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
