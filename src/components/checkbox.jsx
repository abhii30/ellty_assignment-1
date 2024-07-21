import { Tick } from "../assets";
import React, { useState } from "react";

const Checkbox = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleCheckbox = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`w-6 h-6 rounded-md border border-secondary-faded hover:border-secondary flex items-center justify-center ${
        isActive ? "bg-blue border-blue" : ""
      }`}
      onClick={toggleCheckbox}
    >
      <div
        className={`opacity-0 hover:opacity-100 ${
          isActive ? "opacity-100" : ""
        }`}
      >
        <Tick color={isActive ? "white" : "#E3E3E3"} />
      </div>
    </div>
  );
};

export default Checkbox;
