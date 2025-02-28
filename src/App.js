import { useState } from "react";
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
  const [selectedContainer, setSelectedContainer] = useState("7oz_jar");
  const [labelType, setLabelType] = useState("none");
  const [screenPrint, setScreenPrint] = useState("none");
  const [sprayColor, setSprayColor] = useState("none");
  const [hasDustCovers, setHasDustCovers] = useState(false);
  const [cases, setCases] = useState(4);
  const [isRushOrder, setIsRushOrder] = useState(false);
  const [enhancements, setEnhancements] = useState([]);

  return (
    <div>
      <Header />
      <ContainerSelector onSelect={setSelectedContainer} />
      <LabelOptions onSelect={setLabelType} />
      {labelType === "custom" && <Enhancements onSelect={setEnhancements} />}
      <ScreenPrintOptions onSelect={setScreenPrint} />
      <SprayColorOptions selectedContainer={selectedContainer} onSelect={setSprayColor} />
      <DustCoverSelector onSelect={setHasDustCovers} />
      <OrderQuantity onSelect={setCases} />
      <RushOrderToggle onSelect={setIsRushOrder} />
      <PricingDisplay
        selectedContainer={selectedContainer}
        labelType={labelType}
        screenPrint={screenPrint}
        sprayColor={sprayColor}
        hasDustCovers={hasDustCovers}
        cases={cases}
        isRushOrder={isRushOrder}
      />
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Enhancements: {enhancements.length > 0 ? enhancements.join(", ").replaceAll("_", " ") : "None"}
      </p>
    </div>
  );
}

export default App;
