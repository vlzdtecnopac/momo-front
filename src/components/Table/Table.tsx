import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "./inventory.json";
import "./Table.scss";
import OrderCard from "../OrderCard/OrderCard";
type Inventory = {
  id: string;
  name: string;
  actualAmount: string;
  alertLevel: string;
  minimumAmount: string;
};

const columns = [
  {
    header: "Inventario",
    accesorKey: "name",
  },
  {
    header: "Cantidad Actual",
    accesorKey: "actualamount",
  },
  {
    header: "Nivel de alerta",
    accesorKey: "alertlevel",
  },
  {
    header: "Cantidad Minima",
    accesorKey: "minimumamount",
  },
];
function Table() {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getRowModel().rows);

  return (
    <div className="table">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
