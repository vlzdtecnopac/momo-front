import React from "react";

import "./Table.scss";

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
  return (
    <div className="content-table">
      <table className="table_header">
        <thead>
          <tr small-text>
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
                <td className="td medium-text">
                  <i className={`icon ${item.status}`}></i>
                </td>
                <td className="td medium-text">{item.alert}</td>
                <td className="td medium-text">{item.hour}</td>
                <td className={`text-${item.status} medium-text`}>
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
