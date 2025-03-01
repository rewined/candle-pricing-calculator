import React, { useState } from "react";

function PricingDisplay({ 
  selectedContainer, 
  labelType, 
  screenPrint, 
  sprayColor, 
  hasDustCovers, 
  cases, 
  isRushOrder, 
  enhancements = [] 
}) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Base container prices
  const containerPrices = {
    "7oz_jar": 4.50,
    "9oz_jar": 5.00,
    "10oz_sonoma": 5.50,
    "12oz_jar": 6.00,
  };

  // Container descriptions for display
  const containerDescriptions = {
    "7oz_jar": "7oz Jar with Lid",
    "9oz_jar": "9oz Jar",
    "10oz_sonoma": "10oz Sonoma Jar",
    "12oz_jar": "12oz Jar with Lid"
  };

  // Calculate units per case for each container (assume 6 is standard)
  const unitsPerCase = 6;
  const totalUnits = cases * unitsPerCase;

  // Set base price
  const containerBasePrice = containerPrices[selectedContainer];
  let totalContainerPrice = containerBasePrice * totalUnits;

  // Label pricing
  let labelPrice = 0;
  if (labelType === "custom") {
    labelPrice = 0.75 * totalUnits; // Base custom label price
    
    // Add enhancement prices
    if (enhancements.includes("emboss")) labelPrice += 0.25 * totalUnits;
    if (enhancements.includes("gold_foil")) labelPrice += 0.50 * totalUnits;
    if (enhancements.includes("die_cut")) labelPrice += 0.35 * totalUnits;
    if (enhancements.includes("premium_papers")) labelPrice += 0.30 * totalUnits;
  }

  // Screen print pricing
  let screenPrintPrice = 0;
  if (screenPrint === "one_color") screenPrintPrice = 0.40 * totalUnits;
  if (screenPrint === "two_color") screenPrintPrice = 0.70 * totalUnits;
  if (screenPrint === "three_color") screenPrintPrice = 1.00 * totalUnits;

  // Spray color pricing - only available for 9oz jar
  let sprayColorPrice = 0;
  if (selectedContainer === "9oz_jar" && sprayColor !== "none") {
    if (sprayColor === "custom_color" && totalUnits < 1000) {
      // Custom colors require 1000+ units
      sprayColorPrice = 0; // Not available
    } else {
      // Standard spray colors
      if (sprayColor === "white_inside" || sprayColor === "black_inside") {
        sprayColorPrice = 0.35 * totalUnits;
      } else if (sprayColor === "white_outside") {
        sprayColorPrice = 0.45 * totalUnits;
      } else if (sprayColor === "custom_color") {
        sprayColorPrice = 0.60 * totalUnits;
      }
    }
  }

  // Dust cover pricing
  let dustCoverPrice = 0;
  if (hasDustCovers) {
    // Only charge for dust covers if over 800 units
    if (totalUnits > 800) {
      dustCoverPrice = 0.50 * totalUnits;
    }
  }

  // Calculate subtotal
  let subtotal = totalContainerPrice + labelPrice + screenPrintPrice + sprayColorPrice + dustCoverPrice;

  // Apply rush order fee if selected
  let rushOrderFee = 0;
  if (isRushOrder) {
    rushOrderFee = subtotal * 0.2; // 20% fee
  }

  // Calculate final total
  const total = subtotal + rushOrderFee;

  return (
    <div className="price-display">
      <h2>Total Price</h2>
      <div className="price-amount">${total.toFixed(2)}</div>
      <p>For {totalUnits} units ({cases} cases of {containerDescriptions[selectedContainer]})</p>
      
      <button 
        onClick={() => setShowBreakdown(!showBreakdown)}
        style={{
          padding: "8px 15px",
          margin: "10px 0",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {showBreakdown ? "Hide Price Breakdown" : "Show Price Breakdown"}
      </button>
      
      {showBreakdown && (
        <div className="price-breakdown">
          <div className="price-item">
            <span>Containers:</span>
            <span>${totalContainerPrice.toFixed(2)}</span>
          </div>
          
          {labelPrice > 0 && (
            <div className="price-item">
              <span>Custom Labels{enhancements.length > 0 ? ` with ${enhancements.length} enhancement(s)` : ''}:</span>
              <span>${labelPrice.toFixed(2)}</span>
            </div>
          )}
          
          {screenPrintPrice > 0 && (
            <div className="price-item">
              <span>Screen Printing:</span>
              <span>${screenPrintPrice.toFixed(2)}</span>
            </div>
          )}
          
          {sprayColorPrice > 0 && (
            <div className="price-item">
              <span>Spray Color:</span>
              <span>${sprayColorPrice.toFixed(2)}</span>
            </div>
          )}
          
          {dustCoverPrice > 0 && (
            <div className="price-item">
              <span>Dust Covers:</span>
              <span>${dustCoverPrice.toFixed(2)}</span>
            </div>
          )}
          
          <div className="price-item">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          {rushOrderFee > 0 && (
            <div className="price-item">
              <span>Rush Order Fee (20%):</span>
              <span>${rushOrderFee.toFixed(2)}</span>
            </div>
          )}
          
          <div className="price-item price-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingDisplay;