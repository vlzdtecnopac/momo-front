import "./DisplayConfig.scss";
import DisplayOption from "./DisplayOption/DisplayOption";

import splitIcon from "../../assets/icons/split.svg";
import stackedIcon from "../../assets/icons/stacked.svg";
import clasicIcon from "../../assets/icons/clasic.svg";

const options = [
  {
    icon: { splitIcon },
    text: "Split",
  },
  {
    icon: { stackedIcon },
    text: "Split",
  },
  {
    icon: { clasicIcon },
    text: "Split",
  },
];

function DisplayConfig() {
  return (
    <div className="display-config">
      <h2 className="title">Configuración display</h2>
      <p className="sub-title">Visualización</p>
      <div className="display">
        <DisplayOption
          icon={""}
          text={""}
        />
      </div>
      <div className="text-size"></div>
    </div>
  );
}
export default DisplayConfig;
