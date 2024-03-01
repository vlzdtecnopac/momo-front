import "./DisplayOption.scss";
import { v4 as uuidv4 } from "uuid";
interface OptionProps {
  icon: any;
  text: string;
  check: boolean;
}

const DisplayOption: React.FC<OptionProps> = ({ icon, text, check }) => {
  const id_input = "id_" + uuidv4();
  return (
    <div className="display-option">
      <div className="container">
        <img
          className="option-icon"
          src={icon}
          alt={text}
        />
        <h3 className="option-text">{text}</h3>
        
        <div className="opcion-radio-desing">
          <input
            type="radio"
            id={id_input}
            name="check_process"
            checked={check}
          />
          
          <label htmlFor={id_input}></label>
        </div>
      </div>
    </div>
  );
};

export default DisplayOption;
