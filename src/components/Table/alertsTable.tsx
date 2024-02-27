import React from "react";
import data from "./alerts.json";
import "./Table.scss";

type Alerts = {
  id: string;
  alert: string;
  hour: string;
  alertLevel: string;
};

const columns = [
  {
    header: "Alerta",
    accessorKey: "alert",
  },
  {
    header: "Hora",
    accessorKey: "hour",
  },
  {
    header: "Nivel de alerta",
    accessorKey: "alertLevel",
  },
  {
    header: "Acción",
  },
];

function AlertTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              className="th"
              key={index}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: Alerts) => (
          <tr
            className="tr"
            key={item.id}
          >
            {columns.map((column, index) => (
              <td
                className="td"
                key={index}
              >
                <div className={item[column.accessorKey]}></div>
                {item[column.accessorKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AlertTable;
