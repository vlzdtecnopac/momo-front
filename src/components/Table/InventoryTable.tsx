import React from "react";

import "./Table.scss";
import InventoryTabs from "../Tabs/InventoryTabs/InventoryTabs";

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

const data: Inventory[] = [];

for (let i = 0; i < 100; i++) {
  data.push({
    id: i.toString(),
    inventario: "2",
    name: `Producto ${i}`,
    actualAmount: Math.floor(Math.random() * 20).toString(), // Genera un número aleatorio entre 0 y 19
    alertLevel: Math.floor(Math.random() * 10).toString(), // Genera un número aleatorio entre 0 y 9
    minimumAmount: "1",
    status: getRandomStatus(), // Obtiene un estado aleatorio de la función getRandomStatus
  });
}

function getRandomStatus() {
  const statuses = ["success", "danger", "warning"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

function Table() {
  return (
    <>
      <InventoryTabs />
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
      </div>
    </>
  );
}

export default Table;
