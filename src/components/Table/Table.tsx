import React from "react";
import data from "./inventory.json";
import "./Table.scss";

type Inventory = {
  [key: string]: string;
  id: string;
  name: string;
  actualAmount: string;
  alertLevel: string;
  minimumAmount: string;
};

const columns = [
  {
    header: "",
    accessorKey: "status",
  },
  {
    header: "Inventario",
    accessorKey: "name",
  },
  {
    header: "Cantidad Actual",
    accessorKey: "actualAmount",
  },
  {
    header: "Nivel de alerta",
    accessorKey: "alertLevel",
  },
  {
    header: "Cantidad Minima",
    accessorKey: "minimumAmount",
  },
];

function Table() {
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
        {data.map((item: Inventory) => (
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

export default Table;
