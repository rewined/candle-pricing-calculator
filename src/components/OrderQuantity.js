import { useState } from "react";

function OrderQuantity({ onSelect }) {
  const [cases, setCases] = useState(4);
  const unitsPerCase = 6;
  const minimumCases = 4;

  const handleChange = (newCases) => {
    const validCases = Math.max(newCases, minimumCases);
    setCases(validCases);
    onSelect(validCases);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Order Quantity</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
          onClick={() => handleChange(cases - 1)}
          style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        >
          ➖
        </button>
        <input
          type="number"
          min={minimumCases}
          value={cases}
          onChange={(e) => handleChange(Number(e.target.value))}
          style={{ width: "50px", textAlign: "center", fontSize: "16px" }}
        />
        <button
          onClick={() => handleChange(cases + 1)}
          style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
        >
          ➕
        </button>
      </div>
      <p>{cases * unitsPerCase} total units</p>
    </div>
  );
}

export default OrderQuantity;
