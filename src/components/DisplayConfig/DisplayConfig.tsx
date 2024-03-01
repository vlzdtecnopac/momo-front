import "./DisplayConfig.scss";
import { v4 as uuidv4 } from "uuid";
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
  const id_input = "id_" + uuidv4();
  return (
    <>
    <div className="config-display-section">
      <h2 className="title">Configuración display</h2>
      <p className="sub-title">Visualización</p>
    
        <div className="grid-3_xs-1">
          <div className="col-4">
          <div className="display-config">
            {options.map((option) => (
              <DisplayOption
                key={option.text}
                icon={option.icon}
                text={option.text}
              />
            ))}
            </div>
          </div>
          <div className="col-6">
            <div>
              <div>
                <div className="opcion-radio">
                  <input type="radio" id={id_input} name="check_text" />
                </div>
              </div>
              <div>
                <div className="opcion-radio">
                  <input type="radio" id={id_input} name="check_text" />
                </div>
              </div>
              <div>
                <div className="opcion-radio">
                  <input type="radio" id={id_input} name="check_text" />
                </div>
              </div>
            </div>
          </div>
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
