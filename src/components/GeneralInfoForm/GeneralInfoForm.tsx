import "./GeneralInfoForm.scss";
function GeneralInfoForm() {
  return (
    <>
      <form
        className="info-form"
        action=""
        method="POST"
      >
        <div className="left">
          <div className="group">
            <input
              id="store"
              type="text"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="store">Tienda</label>
          </div>
          <div className="group">
            <input
              id="close"
              type="datetime-local"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">Cierre anterior</label>
          </div>
        </div>
        <div className="right">
          <div className="group">
            <input
              id="email"
              type="text"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">Email</label>
          </div>

          <div className="group">
            <input
              id="open"
              type="datetime-local"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">Apertura</label>
          </div>
        </div>
      </form>
    </>
  );
}
export default GeneralInfoForm;
