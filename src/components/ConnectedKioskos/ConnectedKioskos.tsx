import { useContext, useEffect, useState } from "react";
import { useDesignStore } from "../../store/design.store";
import { SocketContext } from "../../context/SocketContext";
import KioskoCard from "../Card/KioskoCard";
import "./ConnectedKioskos.scss";
import { KioskoInterface } from "../../interfaces/kiosko.interface";

function ConnectedKioskos() {
  const { socket } = useContext(SocketContext);
  const [kioskos, setKioskos] = useState<KioskoInterface[]>();
  const { typeTypography } = useDesignStore();

  useEffect(() => {
    socket.on("kiosko-socket", (data: KioskoInterface[]) => setKioskos(data));
  }, [socket]);

  return (
    <>
      <div className="kiosko-component">
        <div className="grid-2_xs-1 column-center">
          <div className="col">
            <h2 className={`connected-title  ${typeTypography}-text`}>
              Kioskos conectados (0)
            </h2>
          </div>
          <div className="col column-right">
            <button className="btn-desconnect-all">Desconectar Todos</button>
          </div>
        </div>

        <div className="connected">
          <ul className="connected-group">
            <li className="content-center">
              <KioskoCard
                design="style2"
                text="Agregar"
                subText="Nuevo Kiosko"
                state={false}
                backgroundColor="#D5EAFB"
              />
            </li>
            {kioskos?.map((_, index: number) => {
              index = kioskos.length - 1 - index;
              return (
                <li key={kioskos[index].kiosko_id} className="content-center">
                  <KioskoCard
                    kiosko_id={kioskos[index].kiosko_id}
                    design="style1"
                    text={kioskos[index].nombre}
                    subText={kioskos[index]?.name_shopping}
                    state={kioskos[index].state}
                    backgroundColor= {kioskos[index].state ? "#D5EAFB" : "#e8e8e8"} 
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ConnectedKioskos;
