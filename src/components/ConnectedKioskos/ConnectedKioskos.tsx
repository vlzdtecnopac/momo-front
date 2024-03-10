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
  console.log(kioskos);

  return (
    <>
      <div className="kiosko-component">
        <h2 className={`connected-title ${typeTypography}-text`}>
          Kioskos conectados
        </h2>
        <div className="connected">
          <ul className="connected-group">
            {kioskos?.map((_, index: number) => {
              index = kioskos.length - 1 - index;
              return (
                <li className="content-center">
                  <KioskoCard
                    connect={kioskos[index].state}
                    text={kioskos[index].nombre}
                    subText="Tienda 1"
                    state={kioskos[index].state ?  "Conectado" :  "Desconectado"}
                    backgroundColor="#D5EAFB"
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
