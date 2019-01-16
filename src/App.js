import React, { Component } from "react";
import VariantList from "./components/VariantList";

const variantRecords = [
  { chrom: "x", start: "1", end: "4", ref: "A", alt: "G" },
  { chrom: "y", start: "2", end: "5", ref: "T", alt: "A" },
  { chrom: "z", start: "3", end: "6", ref: "C", alt: "C" }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <VariantList variantRecords={variantRecords} />
      </div>
    );
  }
}

export default App;
