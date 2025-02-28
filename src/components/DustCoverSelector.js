import { useState } from "react";

function DustCoverSelector({ onSelect }) {
  const [hasDustCovers, setHasDustCovers] = useState(false);

  const handleToggle = () => {
    const newValue = !hasDustCovers;
    setHasDustCovers(newValue);
    onSelect(newValue);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Dust Cover Options</h2>
      <label style={{ fontSize: "18px", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={hasDustCovers}
          onChange={handleToggle}
          style={{ marginRight: "10px" }}
        />
        Add Dust Covers (+$0.50 each over 800 units)
      </label>
    </div>
  );
}

export default DustCoverSelector;
