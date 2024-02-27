import React from "react";

import "./Table.scss";

type Inventory = {
  [key: string]: string;
  id: string;
  name: string;
  actualAmount: string;
  alertLevel: string;
  minimumAmount: string;
};

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

function AlertsTable() {
  return (
    <div className="content-table">
    <table className="table">
      <thead>
        <tr>
          {column_headers.map((column, index) => (
            <th
              className="th"
              key={index}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            className="tr"
            key={index}
            id={`state-${item.status}`}
          >
            <td className="td">
              <i className={`icon ${item.status}`}></i>
            </td>
            <td className="td">{item.alert}</td>
            <td className="td">{item.hour}</td>
            <td className={`text-${item.status}`}>{item.alertLevel}</td>
            <td>
              <button
                style={{
                  borderRadius: "6px",
                  background: "#D5EAFB",
                  border: "none",
                  width: "82px",
                  height: "30px",
                  fontFamily: "Red Hat Display",
                  fontWeight: "700",
                  color: "#2E418E",
                  cursor: "pointer",
                }}
              >
                Notificar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default AlertsTable;
