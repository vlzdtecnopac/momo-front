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
      <div className="config-display-section">
        <h2 className="title">Configuración display</h2>
        <p className="sub-title">Visualización</p>

        <div className="grid-3_xs-12">
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
          <div className="col-8">
            <div className="column-option-text">
              <div className="radio-group">
              <h3 className="text-small">A</h3>
                <div className="opcion-radio-text">
                  <input type="radio" id="small-text" name="text-options" />
                  <label htmlFor="small-text"></label>
                </div>
                <h3 className="text-small">Chico</h3>
              </div>
              <div className="radio-group">
              <h3 className="text-medium">A</h3>
                <div className="opcion-radio-text">
                  <input type="radio" id="medium-text" name="text-options" />
                  <label htmlFor="medium-text"></label>
                </div>
                <h3 className="text-medium">Mediano</h3>
              </div>
              <div>
                <h3 className="text-medium">A</h3>
                <div className="opcion-radio-text">
                  <input type="radio" id="large-text" name="text-options" />
                  <label htmlFor="large-text"></label>
                </div>
                <h3 className="text-large">Grande</h3>
              </div>
            </div>
            <div className="column-save-options">
              <div className="btns">
                <button className="btn back">Regresar</button>
                <button className="btn save">Guardar cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayConfig;
