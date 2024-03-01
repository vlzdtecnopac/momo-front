import coffee from "../../assets/coffee-momo.png";
import "./Congrats.scss";
function CongratsModal() {
  return (
    <div className="congrats">
      <div className="congrats-container">
        <img
          className="congrats-img"
          src={coffee}
          alt="momo-coffee"
        />
        <h2 className="congrat">¡Felicidades!</h2>
        <p className="congrat-text">
          Tus cambios se han guardado exitosamente.
        </p>
      </div>
    </div>
  );
}
export default CongratsModal;
