import { useDesignStore } from "../../store/design.store";
import KioskoCard from "../Card/KioskoCard";
import "./ConnectedKioskos.scss";

function ConnectedKioskos() {
  const { typeTypography } = useDesignStore();

  return (
    <>
      <div className="kiosko-component">
        <h2 className={`connected-title ${typeTypography}-text`}>
          Kioskos conectados
        </h2>
        <div className="connected">
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
            <li className="content-center">
              <KioskoCard
                connect={true}
                text="KIOSKO"
                subText="Tienda 1"
                state="Conectado"
                backgroundColor="#D5EAFB"
              />
            </li>

            <li className="content-center">
              <KioskoCard
                connect={true}
                text="KIOSKO"
                subText="Tienda 1"
                state="Conectado"
                backgroundColor="#D5EAFB"
              />
            </li>
            <li className="content-center">
              <KioskoCard
                connect={true}
                text="KIOSKO"
                subText="Tienda 1"
                state="Conectado"
                backgroundColor="#D5EAFB"
              />
            </li>
            <li className="content-center">
              <KioskoCard
                connect={true}
                text="KIOSKO"
                subText="Tienda 1"
                state="Conectado"
                backgroundColor="#D5EAFB"
              />
            </li>
            <li className="content-center">
              <KioskoCard
                connect={true}
                text="KIOSKO"
                subText="Tienda 1"
                state="Conectado"
                backgroundColor="#D5EAFB"
              />
            </li>
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
      </div>
    </>
  );
}
export default ConnectedKioskos;
