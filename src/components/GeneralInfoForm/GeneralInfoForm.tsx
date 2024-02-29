import "./GeneralInfoForm.scss";
function GeneralInfoForm() {
  return (
    <>
    <h2>Infromación General</h2>
      <form className="info-form" action="" method="POST">
        <div className="grid-3_xs-2_sm-2">
          <div className="col-5">
            <div className="group">
              <label htmlFor="store">Tienda</label>
              <input id="store" type="text" required />
            </div>
            <div className="group">
              <label htmlFor="email">Cierre anterior</label>
              <input id="close" type="datetime-local" required />
            </div>
          </div>
          <div className="col-5">
            <div className="group">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" required />
            </div>
            <div className="group">
              <label htmlFor="email">Apertura</label>
              <input id="open" type="datetime-local" required />
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </form>
    </>
  );
}
export default GeneralInfoForm;
