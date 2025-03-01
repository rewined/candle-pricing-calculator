import React, { useState } from "react";
import "./App.css"; // Make sure to use the proper CSS file
import Header from "./components/Header";
import ContainerSelector from "./components/ContainerSelector";
import LabelOptions from "./components/LabelOptions";
import ScreenPrintOptions from "./components/ScreenPrintOptions";
import SprayColorOptions from "./components/SprayColorOptions";
import DustCoverSelector from "./components/DustCoverSelector";
import OrderQuantity from "./components/OrderQuantity";
import RushOrderToggle from "./components/RushOrderToggle";
import PricingDisplay from "./components/PricingDisplay";
import Enhancements from "./components/Enhancements";

function App() {
  // State management for all options
  const [selectedContainer, setSelectedContainer] = useState("7oz_jar");
  const [labelType, setLabelType] = useState("none");
  const [screenPrint, setScreenPrint] = useState("none");
  const [sprayColor, setSprayColor] = useState("none");
  const [hasDustCovers, setHasDustCovers] = useState(false);
  const [cases, setCases] = useState(4);
  const [isRushOrder, setIsRushOrder] = useState(false);
  const [enhancements, setEnhancements] = useState([]);
  
  // Container information
  const containerInfo = {
    "7oz_jar": { name: "7oz Jar with Lid", price: 4.50 },
    "9oz_jar": { name: "9oz Jar", price: 5.00 },
    "10oz_sonoma": { name: "10oz Sonoma Jar", price: 5.50 },
    "12oz_jar": { name: "12oz Jar with Lid", price: 6.00 }
  };

  return (
    <div className="app-container">
      <Header />
      
      <div className="app-section">
        <ContainerSelector 
          onSelect={setSelectedContainer} 
          selected={selectedContainer}
          containerInfo={containerInfo}
        />
      </div>
      
      <div className="app-section">
        <LabelOptions onSelect={setLabelType} selected={labelType} />
        
        {labelType === "custom" && (
          <div style={{ marginTop: "15px" }}>
            <Enhancements onSelect={setEnhancements} selected={enhancements} />
          </div>
        )}
      </div>
      
      <div className="app-section">
        <ScreenPrintOptions onSelect={setScreenPrint} selected={screenPrint} />
      </div>
      
      <div className="app-section">
        <SprayColorOptions 
          selectedContainer={selectedContainer} 
          onSelect={setSprayColor}
          selected={sprayColor} 
        />
      </div>
      
      <div className="app-section">
        <DustCoverSelector onSelect={setHasDustCovers} selected={hasDustCovers} />
      </div>
      
      <div className="app-section">
        <OrderQuantity onSelect={setCases} selected={cases} />
      </div>
      
      <div className="app-section">
        <RushOrderToggle onSelect={setIsRushOrder} selected={isRushOrder} />
      </div>
      
      <div className="app-section">
        <PricingDisplay
          selectedContainer={selectedContainer}
          labelType={labelType}
          screenPrint={screenPrint}
          sprayColor={sprayColor}
          hasDustCovers={hasDustCovers}
          cases={cases}
          isRushOrder={isRushOrder}
          enhancements={enhancements}
        />
      </div>
      
      {/* Order Summary */}
      <div className="order-summary" style={{ marginTop: "30px", padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
        <h3>Order Summary</h3>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li><strong>Container:</strong> {containerInfo[selectedContainer].name}</li>
          <li><strong>Label:</strong> {labelType === "none" ? "No Label" : "Custom Label"}</li>
          {labelType === "custom" && enhancements.length > 0 && (
            <li>
              <strong>Enhancements:</strong> {enhancements.map(e => e.replaceAll("_", " ")).join(", ")}
            </li>
          )}
          <li><strong>Screen Print:</strong> {screenPrint === "none" ? "None" : 
            screenPrint === "one_color" ? "1 Color" : 
            screenPrint === "two_color" ? "2 Colors" : "3 Colors"}</li>
          
          {selectedContainer === "9oz_jar" && sprayColor !== "none" && (
            <li><strong>Spray Color:</strong> {sprayColor.replaceAll("_", " ")}</li>
          )}
          
          <li><strong>Dust Covers:</strong> {hasDustCovers ? "Yes" : "No"}</li>
          <li><strong>Quantity:</strong> {cases} cases ({cases * 6} units)</li>
          <li><strong>Rush Order:</strong> {isRushOrder ? "Yes (+20%)" : "No"}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;