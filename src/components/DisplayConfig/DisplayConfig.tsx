import "./DisplayConfig.scss";
import DisplayOption from "./DisplayOption/DisplayOption";

import splitIcon from "../../assets/icons/split.svg";
import stackedIcon from "../../assets/icons/stacked.svg";
import clasicIcon from "../../assets/icons/clasic.svg";

const options = [
  { icon: splitIcon, text: "Split" },
  { icon: stackedIcon, text: "Stacked" }, // Corrected text "Stacked"
  { icon: clasicIcon, text: "Clasica" }, // Corrected text "Classic"
];

function DisplayConfig() {
  return (
    <div className="display-config">
      <h2 className="title">Configuración display</h2>
      <p className="sub-title">Visualización</p>
      <div className="display">
        {/* Map through the options array and render each option as a DisplayOption component */}
        {options.map((option) => (
          <DisplayOption
            key={option.text}
            icon={option.icon}
            text={option.text}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayConfig;
