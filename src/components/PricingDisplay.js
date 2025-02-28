function PricingDisplay({ selectedContainer, labelType, screenPrint, sprayColor, hasDustCovers, cases, isRushOrder }) {
    const containerPrices = {
      "7oz_jar": 4.50,
      "9oz_jar": 5.00,
      "10oz_sonoma": 5.50,
      "12oz_jar": 6.00,
    };
  
    const basePrice = containerPrices[selectedContainer];
    let totalPrice = basePrice * cases * 6;
    if (isRushOrder) totalPrice *= 1.2;
  
    return (
      <div className="summary">
        <h2>Total Price</h2>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "green" }}>${totalPrice.toFixed(2)}</p>
      </div>
    );
  }
  
  export default PricingDisplay;
  