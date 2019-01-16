import React from "react";

const VariantRecord = props => {
  const { chrom, start, end, ref, alt } = { ...props.record };

  return <li>{`${chrom} ${start} ${end} ${ref} ${alt}`}</li>;
};

export default VariantRecord;
