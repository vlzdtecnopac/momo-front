import "./ConfigTabs.scss";
import React, { useState } from "react";

function ConfigTabs() {
  const [options, setOptions] = useState([
    {
      text: "General",
      active: false,
    },
    {
      text: "Display",
      active: false,
    },
    {
      text: "Kioskos",
      active: true,
    },
  ]);

  const changeActivate = (index: number) => {
    const updatedOptions = options.map((option, i) => ({
      ...option,
      active: i == index ? true : false,
    }));
    setOptions(updatedOptions);
  };

  return (
    <>
      <div className="tabs">
        <ul>
          {options.map((tab, index: number) => (
            <li
              className={tab.active ? "active" : ""}
              key={index}
              onClick={() => changeActivate(index)}
            >
              <div className={`tab-button ${tab.active ? "active" : ""}`}>
                <br />
                <span className={`${tab.active ? "active" : ""}`}>
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
