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

const column_headers = [
  "",
  "Inventario",
  "Cantidad actual",
  "Nivel de alerta",
  "Cantidad Minima",
];

const data = [
  {
    id: "0",
    inventario: "2",
    name: "leche",
    actualAmount: "8",
    alertLevel: "4",
    minimumAmount: "1",
    status: "success",
  },
  {
    id: "1",
    inventario: "2",
    name: "cafe",
    actualAmount: "8",
    alertLevel: "4",
    minimumAmount: "1",
    status: "danger",
  },
  {
    id: "2",
    inventario: "2",
    name: "pastel",
    actualAmount: "8",
    alertLevel: "4",
    minimumAmount: "1",
    status: "warning",
  },
];

function Table() {
  return (
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
            <td className="td">{item.name}</td>
            <td className="td">
              <p className={`text-${item.status}`}>{item.actualAmount}</p>
            </td>
            <td>{item.alertLevel}</td>
            <td>{item.minimumAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
