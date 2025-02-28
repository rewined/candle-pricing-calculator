import { useState } from "react";
import Button from "./Button";

function ContainerSelector({ onSelect }) {
  const containers = {
    "7oz_jar": { name: "7oz Jar with Lid", size: 7 },
    "9oz_jar": { name: "9oz Jar", size: 9 },
    "10oz_sonoma": { name: "10oz Sonoma Jar", size: 10 },
    "12oz_jar": { name: "12oz Jar with Lid", size: 12 }
  };

  const [selected, setSelected] = useState("7oz_jar");

  const handleSelect = (container) => {
    setSelected(container);
    onSelect(container);
  };

  return (
    <div className="container">
      <h2>Select a Container</h2>
      <div className="grid-buttons">
        {Object.keys(containers).map((key) => (
          <Button key={key} isSelected={selected === key} onClick={() => handleSelect(key)}>
            {containers[key].name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ContainerSelector;
