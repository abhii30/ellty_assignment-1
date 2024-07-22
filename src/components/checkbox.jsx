import { Tick } from "../assets";
import { useState } from "react";

const Checkbox = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const toggleCheckbox = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div
        className={`w-6 h-6 rounded-md flex items-center justify-center ${
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
      <h1 className="text-blue">{isPressed.toString()}</h1>
      <h2>{isActive.toString()}</h2>
    </div>
  );
};

export default Checkbox;
