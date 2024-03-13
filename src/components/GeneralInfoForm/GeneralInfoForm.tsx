import { useNavigate } from "react-router-dom";
import { useDesignStore } from "../../store/design.store";
import { useEffect, useState } from "react";
import CongratsModal from "../Congrats/CongratsModal";
import { Formik } from "formik";
import { useShoppingStore } from "../../store/shopping.store";
import { useEmployeeStore } from "../../store/employee.store";
import "./GeneralInfoForm.scss";

function GeneralInfoForm() {
  const navigate = useNavigate();
  const { data, fetchData } = useShoppingStore();
  const { fetchEmployeeData } = useEmployeeStore();
  const [success, setSuccess] = useState(false);
  const [loader, setIsLoading] = useState<Boolean>(false);  


  const { typeTypography } = useDesignStore();

  const saveChangeHandler = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    setSuccess(true);
  };

  useEffect(() => {
    if(!loader){
    setIsLoading(true);
    const fetchDataOnMount = async () => {
      const employeeId = localStorage.getItem("employee-id");
      if (employeeId) {
        fetchEmployeeData(employeeId).then(async(resp: any) => await fetchData(resp[0].shopping_id));
      }
    };
    fetchDataOnMount();
    }
  }, [loader]);

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
       initialValues={{ store: data[0]?.name_shopping, close: '', email: data[0]?.email , open: ''}}
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
      </form>)}
      </Formik>
    </>
  );
}
export default GeneralInfoForm;
