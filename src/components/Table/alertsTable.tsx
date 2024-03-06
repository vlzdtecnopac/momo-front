import React from "react";

import "./Table.scss";
import { useDesignStore } from "../../store/design.store";

const column_headers = ["", "Alertas", "Hora", "Nivel de alerta", "Acción"];

const data = [
  {
    id: "0",
    status: "success",
    alert: "No hay pan",
    hour: "10:00 pm",
    alertLevel: "5",
  },
  {
    id: "1",
    status: "danger",
    alert: "No hay azucar",
    hour: "03:00 pm",
    alertLevel: "2",
  },
  {
    id: "2",
    status: "warning",
    alert: "No hay limones",
    hour: "02:00 pm",
    alertLevel: "3",
  },
];

for (let i = 0; i < 100; i++) {
  data.push({
    id: "0",
    status: "success",
    alert: "No hay pan",
    hour: "10:00 pm",
    alertLevel: "5",
  });
}

function AlertsTable() {
  const { typeTypography } = useDesignStore();

  return (
    <div className="content-table">
      <table className="table_header">
        <thead>
          <tr className={`${typeTypography}-text`}>
            {column_headers.map((column, index) => (
              <th
                className="th medium-text"
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="scroll_alerts">
        <table className="table">
          <tbody>
            {data.map((item, index) => (
              <tr
                className="tr"
                key={index}
                id={`state-${item.status}`}
              >
                <td className={`td ${typeTypography}-text`}>
                  <i className={`icon ${item.status}`}></i>
                </td>
                <td className={`td ${typeTypography}-text`}>{item.alert}</td>
                <td className={`td ${typeTypography}-text`}>{item.hour}</td>
                <td className={`text-${item.status} ${typeTypography}-text`}>
                  {item.alertLevel}
                </td>
                <td>
                  <button className="btn_notify">Notificar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlertsTable;
