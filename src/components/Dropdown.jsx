import React, { useState } from "react";

const Dropdown = () => {
  return (
    <div className="w-full ">
      {/* The select dropdown */}
      <select className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black">
        <option value="" disabled>
          When (Date)
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
