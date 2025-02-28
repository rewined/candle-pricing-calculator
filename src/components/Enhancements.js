import { useState } from "react";
import Button from "./Button";

function Enhancements({ onSelect }) {
  const enhancementsList = {
    emboss: "Emboss",
    gold_foil: "Gold Foil",
    die_cut: "Die Cut",
    premium_papers: "Premium Papers",
  };

  const [selectedEnhancements, setSelectedEnhancements] = useState([]);

  const handleToggle = (enhancement) => {
    let updatedSelections;
    if (selectedEnhancements.includes(enhancement)) {
      updatedSelections = selectedEnhancements.filter((item) => item !== enhancement);
    } else {
      updatedSelections = [...selectedEnhancements, enhancement];
    }
    setSelectedEnhancements(updatedSelections);
    onSelect(updatedSelections);
  };

  return (
    <div className="container">
      <h2>Special Label Enhancements</h2>
      <p style={{ fontSize: "14px", color: "gray" }}>
        (Applies only if Custom Label is selected)
      </p>
      <div className="grid-buttons">
        {Object.keys(enhancementsList).map((key) => (
          <Button
            key={key}
            isSelected={selectedEnhancements.includes(key)}
            onClick={() => handleToggle(key)}
          >
            {enhancementsList[key]}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Enhancements;
