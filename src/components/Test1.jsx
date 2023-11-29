import React, { memo } from "react";

const Test1 = ({ value }) => {
  console.log("test1");
  return (
    <div className="bg-gray-200">
      <h5>Test1</h5>
      {value}
    </div>
  );
};

export default memo(Test1, (prevProps, nextProps) => {
  if (nextProps.value.includes("5")) {
    return false;
  }
  return true;
});
