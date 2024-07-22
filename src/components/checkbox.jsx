/* eslint-disable react/prop-types */
import { Tick } from "../assets";
import { useState } from "react";

const Checkbox = ({isActive=false}) => {
  const [isPressed, setIsPressed] = useState(false);

  const toggleCheckbox = () => {
    isActive = !isActive;
  };

  return (
      <div
        className={`w-6 h-6 rounded-md flex items-center justify-center cursor-pointer ${
          isActive
            ? "bg-blue hover:bg-blue-faded border-blue hover:border hover:border-blue-faded active:border-blue-faded"
            : "border border-secondary-faded hover:border-secondary"
        } ${isPressed ? "shadow-[0_0_6px] shadow-blue-light" : ""}`}
        onClick={toggleCheckbox}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      >
        <div
          className={`opacity-0 hover:opacity-100 ${
            isActive ? "opacity-100" : ""
          }`}
        >
          <Tick
            color={
              isPressed
                ? isActive
                  ? "white"
                  : "#878787"
                : isActive
                ? "white"
                : "#E3E3E3"
            }
          />
        </div>
      </div>
  );
};

export default Checkbox;
