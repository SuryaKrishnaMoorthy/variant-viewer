import React from "react";
import VariantRecord from "./VariantRecord";

const VariantList = ({ variantRecords }) => {
  console.log(variantRecords);

  return (
    <div>
      <ul>
        {variantRecords.map(record => (
          <VariantRecord record={record} />
        ))}
      </ul>
    </div>
  );
};
export default VariantList;
