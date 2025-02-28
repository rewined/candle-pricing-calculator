import { useState } from "react";

function RushOrderToggle({ onSelect }) {
  const [isRushOrder, setIsRushOrder] = useState(false);

  const handleToggle = () => {
    const newValue = !isRushOrder;
    setIsRushOrder(newValue);
    onSelect(newValue);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Rush Order</h2>
      <label style={{ fontSize: "18px", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={isRushOrder}
          onChange={handleToggle}
          style={{ marginRight: "10px" }}
        />
        Rush Order (+20% fee)
      </label>
    </div>
  );
}

export default RushOrderToggle;
