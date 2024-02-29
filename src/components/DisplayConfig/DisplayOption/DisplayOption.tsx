import "./DisplayOption.scss";
import split from "../../../assets/icons/split.svg";
function DisplayOption() {
  return (
    <div className="display-option">
      <img
        className="option-icon"
        src={split}
        alt="icon"
      />
      <h3>Split</h3>
    </div>
  );
}
export default DisplayOption;
