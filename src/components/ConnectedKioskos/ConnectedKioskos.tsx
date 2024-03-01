import KioskoCard from "../Card/KioskoCard";
import "./ConnectedKioskos.scss";


function ConnectedKioskos() {
  return (
    <>
      <div className="connected">
        <h2 className="connected-title">Kioskos conectados</h2>
        <ul className="connected-group">
          <li className="content-center">
          <KioskoCard
            connect={true}
            text="KIOSKO"
            subText="Tienda 1"
            state="Conectado"
            backgroundColor="#D5EAFB"
          />
          </li>
          <li>
          <KioskoCard
            connect={false}
            text="KIOSKO"
            subText="Tienda 1"
            state="Conectado"
            backgroundColor="#D5EAFB"
          />
          </li>
        </ul>
      </div>
    </>
  );
}
export default ConnectedKioskos;
