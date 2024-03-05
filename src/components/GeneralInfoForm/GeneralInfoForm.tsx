import "./GeneralInfoForm.scss";
function GeneralInfoForm() {
  return (
    <>
      <h2 className="info-general-title medium-text ">Información General</h2>
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
                className="medium-text"
                id="store"
                placeholder="Tienda 1"
                type="text"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="close">Cierre anterior</label>
              <input
                className="medium-text"
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
                className="medium-text"
                id="email"
                placeholder="mitienda@gmail.com"
                type="text"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="open">Apertura</label>
              <input
                className="medium-text"
                id="open"
                type="datetime-local"
                required
              />
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </>
  );
}
export default GeneralInfoForm;
