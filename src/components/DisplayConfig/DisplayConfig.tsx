import "./DisplayConfig.scss";
import DisplayOption from "./DisplayOption/DisplayOption";

function DisplayConfig() {
  return (
    <div className="display-config">
      <h2 className="title">Configuración display</h2>
      <p className="sub-title">Visualización</p>
      <div className="display">
        <DisplayOption />
      </div>
      <div className="text-size"></div>
    </div>
  );
}
export default DisplayConfig;
