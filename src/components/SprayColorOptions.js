import { useState, useEffect } from "react";
import Button from "./Button";

function SprayColorOptions({ selectedContainer, onSelect }) {
  const options = {
    none: "No Spray Color",
    white_inside: "White Inside",
    white_outside: "White Outside",
    black_inside: "Black Inside",
    custom_color: "Custom Color (1000+ units)",
  };

  const [selected, setSelected] = useState("none");
  const isAvailable = selectedContainer === "9oz_jar";

  useEffect(() => {
    if (!isAvailable) {
      setSelected("none");
      onSelect("none");
    }
  }, [selectedContainer, isAvailable, onSelect]);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className="container">
      <h2>Spray Color Options (9oz Jar Only)</h2>
      {isAvailable ? (
        <div className="grid-buttons">
          {Object.keys(options).map((key) => (
            <Button key={key} isSelected={selected === key} onClick={() => handleSelect(key)}>
              {options[key]}
            </Button>
          ))}
        </div>
      ) : (
        <p style={{ color: "gray" }}>Spray color is only available for the 9oz jar.</p>
      )}
    </div>
  );
}

export default SprayColorOptions;
