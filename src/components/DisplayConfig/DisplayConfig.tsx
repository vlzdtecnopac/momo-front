import "./DisplayConfig.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DisplayOption from "./DisplayOption/DisplayOption";
import splitIcon from "../../assets/icons/split.svg";
import stackedIcon from "../../assets/icons/stacked.svg";
import clasicIcon from "../../assets/icons/clasic.svg";
import CongratsModal from "../../components/Congrats/CongratsModal";
import { TypographyEnum, useDesignStore } from "./../../store/design.store";

const options = [
  { icon: splitIcon, text: "Split" },
  { icon: stackedIcon, text: "Stacked" },
  { icon: clasicIcon, text: "Clasica" },
];

function DisplayConfig() {
  const navigate = useNavigate();

  const { typeTypography, selectTypography, typeColumns, selectTypeColumn } =
    useDesignStore();
  const [success, setSucess] = useState(false);

  const saveChangeHandler = () => {
    setTimeout(() => {
      setSucess(false);
    }, 3000);
    setSucess(true);
  };

  const handleBackNavegation = () => navigate("/dashboard");

  return (
    <>
      <div style={{ display: success ? "block" : "none" }}>
        <CongratsModal actionKey={Number(success)} />
      </div>
      <div className="config-display-section">
        <h2 className="title">Configuración display</h2>
        <div className="grid-3_xs-2">
          <div className="col">
            <p className="sub-title">Visualización</p>
          </div>
          <div className="col">
            <p className="sub-title">Tamaño de texto</p>
          </div>
        </div>
        <div className="grid-2_xs-1_sm-2">
          <div className="col-4_xs-5_sm-5">
            <div className="display-config">
              {options.map((option, index) => (
                <DisplayOption
                  key={option.text}
                  icon={option.icon}
                  text={option.text}
                  check={index == typeColumns ? true : false}
                  handleChange={() => selectTypeColumn(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-8_xs-7_sm-7">
            <div className="column-option-text">
              <section>
                <h3 className="text-title small">A</h3>
                <div className="radio-group">
                  <div className="opcion-radio-text">
                    <input
                      type="radio"
                      id="small-text"
                      onChange={() => selectTypography(TypographyEnum.small)}
                      checked={
                        typeTypography == TypographyEnum.small ? true : false
                      }
                      name="text-options"
                    />
                    <label htmlFor="small-text"></label>
                  </div>
                  <h3 className="text-small">Chico</h3>
                </div>
              </section>
              <section>
                <h3 className="text-title medium">A</h3>
                <div className="radio-group">
                  <div className="opcion-radio-text">
                    <input
                      type="radio"
                      id="medium-text"
                      onChange={() => selectTypography(TypographyEnum.medium)}
                      checked={
                        typeTypography == TypographyEnum.medium ? true : false
                      }
                      name="text-options"
                    />
                    <label htmlFor="medium-text"></label>
                  </div>
                  <h3 className="text-medium">Mediano</h3>
                </div>
              </section>
              <section>
                <h3 className="text-title large">A</h3>
                <div>
                  <div className="opcion-radio-text">
                    <input
                      type="radio"
                      id="large-text"
                      onChange={() => selectTypography(TypographyEnum.large)}
                      checked={
                        typeTypography == TypographyEnum.large ? true : false
                      }
                      name="text-options"
                    />
                    <label htmlFor="large-text"></label>
                  </div>
                  <h3 className="text-large">Grande</h3>
                </div>
              </section>
            </div>
            <div className="column-save-options">
              <div className="btns">
                <button
                  onClick={() => handleBackNavegation()}
                  className="btn back"
                >
                  Regresar
                </button>
                <button
                  onClick={() => saveChangeHandler()}
                  className="btn save"
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayConfig;
