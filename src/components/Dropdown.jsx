import React, { useState } from "react";

const Dropdown = () => {
  return (
    <div className="w-full ">
      {/* The select dropdown */}
      <input
        type="date"
        className="border-2 border-black/20 w-full h-10 rounded-md px-2"
      />
    </div>
  );
};

export default Dropdown;
