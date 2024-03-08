import { useNavigate } from "react-router-dom";
import { useDesignStore } from "../../store/design.store";
import "./GeneralInfoForm.scss";
import { useState } from "react";
import CongratsModal from "../Congrats/CongratsModal";

function GeneralInfoForm() {
  const navigate = useNavigate();
  const [success, setSucess] = useState(false);

  const { typeTypography } = useDesignStore();

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
      <h2 className={`info-general-title ${typeTypography}-text`}>
        Información General
      </h2>
      <form
        className="info-form"
        action=""
        method="POST"
      >
        <div className="grid-3_xs-2_sm-2">
          <div className="col-5">
            <div className="group">
              <label htmlFor="store">Tienda</label>
              <input
                className={`${typeTypography}-text`}
                id="store"
                placeholder="Tienda 1"
                type="text"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="close">Cierre anterior</label>
              <input
                className={`${typeTypography}-text`}
                id="close"
                type="datetime-local"
                required
              />
            </div>
          </div>
          <div className="col-5">
            <div className="group">
              <label htmlFor="email">Email</label>
              <input
                className={`${typeTypography}-text`}
                id="email"
                placeholder="mitienda@gmail.com"
                type="text"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="open">Apertura</label>
              <input
                className={`${typeTypography}-text`}
                id="open"
                type="datetime-local"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-2">
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
      </form>
    </>
  );
}
export default GeneralInfoForm;
