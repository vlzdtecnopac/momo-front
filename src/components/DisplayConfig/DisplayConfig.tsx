import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayOption from "./DisplayOption/DisplayOption";
import splitIcon from "../../assets/icons/split.svg";
import stackedIcon from "../../assets/icons/stacked.svg";
import clasicIcon from "../../assets/icons/clasic.svg";
import CongratsModal from "../../components/Congrats/CongratsModal";
import { TypographyEnum, useDesignStore } from "./../../store/design.store";


import "./DisplayConfig.scss";
import { tokenHeader } from "../../helpers/token-header.helper";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";



const options = [
  { icon: splitIcon, text: "Split" },
  { icon: stackedIcon, text: "Stacked" },
  { icon: clasicIcon, text: "Clasica" },
];

function DisplayConfig() {
  const navigate = useNavigate();
  const [success, setSucess] = useState<Boolean>(false);
  const [loader, setIsLoading] = useState<Boolean>(false);  
  const { data } = useShoppingStore();
  
  const { typeTypography, selectTypography, typeColumns, selectTypeColumn } =
    useDesignStore();


  const saveChangeHandler = async () => {
    setSucess(true);
    try{
      const dataJson = {
        "type_text": typeTypography,
        "type_column": typeColumns
    }
     await axios.put(`${
      import.meta.env.VITE_API_URL
    }/config/${data[0].shopping_id}`, dataJson, {headers: tokenHeader});
     setTimeout(()=>setSucess(false), 2000);
    }catch(e){
      setSucess(false);
    }
  };

  useEffect(() => {
    consultConfig();
  }, []);


  const consultConfig = async () => {
   const response =  await axios.get(`${
    import.meta.env.VITE_API_URL
  }/config/?shopping_id=${data[0].shopping_id}`, {headers: tokenHeader});
   selectTypeColumn(response.data[0]?.type_column); 
   selectTypography(response.data[0]?.type_text);
  }

  const handleBackNavegation = () => navigate("/dashboard");

  return (
    <>
      <div style={{ display: success ? "block" : "none" }}>
        <CongratsModal actionKey={Number(success)} />
      </div>
      <div className="config-display-section">
        <h2 className={`title medium-text ${typeTypography}-text`}>
          Configuración display
        </h2>
        <div className="grid-3_xs-2">
          <div className="col">
            <p className={`sub-title ${typeTypography}-text`}>Visualización</p>
          </div>
          <div className="col">
            <p className={`sub-title ${typeTypography}-text`}>
              Tamaño de texto
            </p>
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
                  className={`btn back ${typeTypography}-text`}
                >
                  Regresar
                </button>
                <button
                  onClick={() => saveChangeHandler()}
                  className={`btn save ${typeTypography}-text`}
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
