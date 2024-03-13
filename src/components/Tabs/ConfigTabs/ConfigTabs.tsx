import React, { useContext, useEffect, useState } from "react";
import "./ConfigTabs.scss";
import { useDesignStore } from "../../../store/design.store";
import { SocketContext } from "../../../context/SocketContext";
import { useEmployeeStore } from "../../../store/employee.store";
import { useShoppingStore } from "../../../store/shopping.store";

type ActionFunction = (valor: number) => void;

interface ChildProps {
  onClick: ActionFunction;
}


const ConfigTabs: React.FC<ChildProps> = ({ onClick }) => {
  const { socket } = useContext(SocketContext);
  const { typeTypography } = useDesignStore();
  const { data, fetchData } = useShoppingStore();
  const { fetchEmployeeData } = useEmployeeStore();
  const [loader, setIsLoading] = useState<Boolean>(false);  

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



  useEffect(() => {
    if(!loader){
    setIsLoading(true);
    const fetchDataOnMount = async () => {
      const employeeId = localStorage.getItem("employee-id");
      if (employeeId) {
        fetchEmployeeData(employeeId).then(async(resp: any) => await fetchData(resp[0].shopping_id));
      }
    };
    fetchDataOnMount();
    }
  }, [loader]);


  const changeActivate = (index: number) => {
    if(index == 2){
      socket.emit("kiosko-socket", {shopping_id: data[0]?.shopping_id });
    }
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
              className={`${tab.active ? "active" : ""} ${typeTypography}-text`}
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
};

export default ConfigTabs;
