import React, { useState, useEffect } from "react";
import Button from "./Button";

function ContainerSelector({ onSelect, selected, containerInfo }) {
  const handleSelect = (container) => {
    onSelect(container);
  };

  return (
    <div className="container">
      <h2>Select a Container</h2>
      <div className="grid-buttons">
        {Object.keys(containerInfo).map((key) => (
          <Button key={key} isSelected={selected === key} onClick={() => handleSelect(key)}>
            <div>
              {containerInfo[key].name}
              <div style={{ fontSize: "0.8em", marginTop: "5px", fontWeight: "normal" }}>
                ${containerInfo[key].price.toFixed(2)} each
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ContainerSelector;