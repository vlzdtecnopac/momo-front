import React, { useState } from "react";
import "./ConfigTabs.scss";

type ActionFunction = (valor: number) => void;

interface ChildProps {
  onClick: ActionFunction;
}

const  ConfigTabs: React.FC<ChildProps> = ({ onClick }) => {
  const [options, setOptions] = useState([
    {
      text: "General",
      active: true,
    },
    {
      text: "Display",
      active: false,
    },
    {
      text: "Kioskos",
      active: false,
    },
  ]);

  const changeActivate = (index: number) => {
    const updatedOptions = options.map((option, i) => ({
      ...option,
      active: i == index ? true : false,
    }));
    onClick?.(index);
    setOptions(updatedOptions);
  };

  return (
    <>
      <div className="config-tabs">
        <ul>
          {options.map((tab, index: number) => (
            <li
              className={tab.active ? "active" : ""}
              key={index}
              onClick={() => changeActivate(index)}
            >
              <div className={`tab-button ${tab.active ? "active" : ""}`}>
                <br />
                <span className={`config-tab ${tab.active ? "active" : ""}`}>
                  {tab.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConfigTabs;
