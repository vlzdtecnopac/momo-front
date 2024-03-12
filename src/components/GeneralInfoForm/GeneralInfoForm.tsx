import { useNavigate } from "react-router-dom";
import { useDesignStore } from "../../store/design.store";
import "./GeneralInfoForm.scss";
import { useEffect, useState } from "react";
import CongratsModal from "../Congrats/CongratsModal";
import { Formik } from "formik";
import { useShoppingStore } from "../../store/shopping.store";

function GeneralInfoForm() {
  const { data, fetchData } = useShoppingStore();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const { typeTypography } = useDesignStore();

  const saveChangeHandler = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    setSuccess(true);
  };

  useEffect(()=>{
    console.log(data[0].name_shopping);
    return () => {
      fetchData(localStorage.getItem("store-momo")!)
    };
  },[])

  const handleBackNavegation = () => navigate("/dashboard");
  return (
    <>
      <div style={{ display: success ? "block" : "none" }}>
        <CongratsModal actionKey={Number(success)} />
      </div>
      <h2 className={`info-general-title ${typeTypography}-text`}>
        Información General
      </h2>
      <Formik
       initialValues={{ store: data ? data[0].name_shopping : '', close: data ?  data[0].close : '', email: data ? data[0].email : '' , open:  data ?  data[0].open : ''}}
       onSubmit={() => {
        saveChangeHandler()
       }}
     >
     {({
          values,
          handleChange,
          handleBlur,
       }) => ( <form
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
                name="store"
                placeholder="Tienda 1"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.store}
              />
            </div>
            <div className="group">
              <label htmlFor="close">Cierre anterior</label>
              <input
                className={`${typeTypography}-text`}
                id="close"
                type="datetime-local"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.close}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="group">
              <label htmlFor="email">Email</label>
              <input
                className={`${typeTypography}-text`}
                id="email"
                name="email"
                placeholder="mitienda@gmail.com"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="group">
              <label htmlFor="open">Apertura</label>
              <input
                className={`${typeTypography}-text`}
                id="open"
                name="open"
                type="datetime-local"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.open}
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
                type="submit" 
                className={`btn save ${typeTypography}-text`}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </form>)}
      </Formik>
    </>
  );
}
export default GeneralInfoForm;
