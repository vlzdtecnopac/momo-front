import { useDesignStore } from "../../../store/design.store";
import "./DisplayOption.scss";
import { v4 as uuidv4 } from "uuid";

type ActionFunction = () => void;

interface OptionProps {
  icon: string;
  text: string;
  check: boolean;
  handleChange: ActionFunction;
}

const DisplayOption: React.FC<OptionProps> = ({
  icon,
  text,
  check,
  handleChange,
}) => {
  const id_input = "id_" + uuidv4();
  const { typeTypography } = useDesignStore();

  return (
    <div className="display-option">
      <div className="container">
        <img
          className="option-icon"
          src={icon}
          alt={text}
        />
        <h3 className={`option-text ${typeTypography}-text`}>{text}</h3>

        <div className="opcion-radio-desing">
          <input
            type="radio"
            id={id_input}
            name="check_process"
            checked={check}
            onChange={handleChange}
          />

          <label htmlFor={id_input}></label>
        </div>
      </div>
    </div>
  );
};

export default DisplayOption;
