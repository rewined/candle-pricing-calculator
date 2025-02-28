import { useState } from "react";
import Button from "./Button";

function ScreenPrintOptions({ onSelect }) {
  const options = {
    none: "No Screen Print",
    one_color: "1 Color",
    two_color: "2 Colors",
    three_color: "3 Colors",
  };

  const [selected, setSelected] = useState("none");

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className="container">
      <h2>Screen Print Options</h2>
      <div className="grid-buttons">
        {Object.keys(options).map((key) => (
          <Button key={key} isSelected={selected === key} onClick={() => handleSelect(key)}>
            {options[key]}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ScreenPrintOptions;
