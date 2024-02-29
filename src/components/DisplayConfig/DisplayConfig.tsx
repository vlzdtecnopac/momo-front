import "./DisplayConfig.scss";
import DisplayOption from "./DisplayOption/DisplayOption";

import splitIcon from "../../assets/icons/split.svg";
import stackedIcon from "../../assets/icons/stacked.svg";
import clasicIcon from "../../assets/icons/clasic.svg";

const options = [
  { icon: splitIcon, text: "Split" },
  { icon: stackedIcon, text: "Stacked" },
  { icon: clasicIcon, text: "Clasica" },
];

function DisplayConfig() {
  return (
    <>
      <h2 className="title">Configuración display</h2>
      <p className="sub-title">Visualización</p>
      <div className="display-config">
        <div className="display">
          {options.map((option) => (
            <DisplayOption
              key={option.text}
              icon={option.icon}
              text={option.text}
            />
          ))}
        </div>

        <div className="font-size-input">
          <p>Tamaño de texto</p>
          <label htmlFor="size-select">Tamaño de texto</label>
          <select
            id="size-select"
            name="size"
          >
            <option value="chico">Chico</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        <div className="btns">
          <button className="btn back">Regresar</button>
          <button className="btn save">Guardar cambios</button>
        </div>
      </div>
    </>
  );
}

export default DisplayConfig;
