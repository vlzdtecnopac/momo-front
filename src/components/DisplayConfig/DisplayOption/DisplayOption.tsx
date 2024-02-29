import "./DisplayOption.scss";

interface OptionProps {
  icon: any;
  text: string;
}

const DisplayOption: React.FC<OptionProps> = ({ icon, text }) => {
  return (
    <div className="display-option">
      <div className="container">
        <img
          className="option-icon"
          src={icon}
          alt={text}
        />
        <h3 className="option-text">{text}</h3>
        <div className="opcion-radio">
          <input
            type="radio"
            id="radio"
            name="check_process"
          />
          <label htmlFor="radio"></label>
        </div>
      </div>
    </div>
  );
};

export default DisplayOption;
