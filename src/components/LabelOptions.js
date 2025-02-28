import { useState } from "react";
import Button from "./Button";

function LabelOptions({ onSelect }) {
  const [labelType, setLabelType] = useState("none");

  const handleSelect = (type) => {
    setLabelType(type);
    onSelect(type);
  };

  return (
    <div className="container">
      <h2>Label Options</h2>
      <div className="grid-buttons">
        <Button isSelected={labelType === "none"} onClick={() => handleSelect("none")}>
          No Label
        </Button>
        <Button isSelected={labelType === "custom"} onClick={() => handleSelect("custom")}>
          Custom Label
        </Button>
      </div>
    </div>
  );
}

export default LabelOptions;
