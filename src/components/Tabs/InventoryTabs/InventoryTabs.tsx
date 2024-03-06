import React, { useState } from "react";
import "./InventoryTabs.scss";
import { useDesignStore } from "../../../store/design.store";

function ConfigTabs() {
  const { typeTypography } = useDesignStore();

  const [options, setOptions] = useState([
    {
      text: "Resumen",
      active: true,
    },
    {
      text: "Insumos para bebidas",
      active: false,
    },
    {
      text: "Listos para consumir",
      active: false,
    },
    {
      text: "Insumos alimentos",
      active: false,
    },
    {
      text: "Desechables",
      active: false,
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
      <div className="inventory-tabs">
        <ul>
          {options.map((tab, index: number) => (
            <li
              className={tab.active ? "active" : ""}
              key={index}
              onClick={() => changeActivate(index)}
            >
              <div className={`tab-button ${tab.active ? "active" : ""}`}>
                <br />
                <span
                  className={`${typeTypography}-text ${
                    tab.active ? "active" : ""
                  }`}
                >
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
