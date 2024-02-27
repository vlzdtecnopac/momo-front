
import data from "./inventory.json";


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
 

  return (
    <div className="table">
    
    </div>
  );
}
export default Table;
