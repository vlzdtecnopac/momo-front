import logo from "../../assets/logo.svg";
import coffee from "../../assets/coffee-momo.png";
import "./404.scss";
function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <div className="notfound-center">
          <img
            className="notfound-logo"
            src={logo}
            alt="logo"
          />
          <h2 className="fail">¡Lo sentimos!</h2>
          <img
            src={coffee}
            alt="alert"
            className="wrong"
          />
          <h2 className="notfound-text">
            <span className="notfound-space">Error 404</span> <br />
            <span className="notfound-space">Página no encontrada</span>
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
