import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../helpers/axios-instance.helpers";

import { useDesignStore } from "../../store/design.store";
import { SocketContext } from "../../context/SocketContext";
import KioskoCard from "../Card/KioskoCard";

import { KioskoInterface } from "../../interfaces/kiosko.interface";

import "./ConnectedKioskos.scss";
import { useShoppingStore } from "../../store/shopping.store";
import { LoaderPage } from "../../includes/loader/Loader";

function ConnectedKioskos() {

  const { socket } = useContext(SocketContext);
  const [kioskos, setKioskos] = useState<KioskoInterface[]>();
  const [loader, isLoader] = useState<boolean>(true);
  const { typeTypography } = useDesignStore();
  const [count, setCount] = useState(0);

  const { data } = useShoppingStore();


  useEffect(() => {
    if(loader){
    updateKioskoSocket();
    }
  }, []);


  useEffect(() => {
    let totalCount = 0;
    kioskos?.forEach(kiosko => {
      if (kiosko.state) {
        totalCount += 1;
      }
    });
    setCount(totalCount);
  }, [kioskos]);

  const kioskoDesactivateAll = async (shopping_id: string) => {
    try {
      isLoader(true);
      await axiosInstance.post("/kioskos/desactive_all_kioskos", {
        shopping_id: shopping_id,
      });
      updateKioskoSocket();
      isLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  function updateKioskoSocket(){
    isLoader(true);
    socket.on("kiosko-socket", (data: KioskoInterface[]) => {
      setKioskos(data)
      isLoader(false);
    });
  
  }

  return (
    <>
     {loader? <LoaderPage/> : ""}
      <div className="kiosko-component">
        <div className="grid-2_xs-1 column-center">
          <div className="col">
            <h2 className={`connected-title  ${typeTypography}-text`}>
              Kioskos conectados ({count})
            </h2>
          </div>
          <div className="col column-right">
            <button
              onClick={() => kioskoDesactivateAll(data[0]?.shopping_id)}
              className="btn-desconnect-all"
            >
              Desconectar Todos
            </button>
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
              //index = kioskos.length - 1 - index;
           
              return (
                <li key={kioskos[index].kiosko_id} className="content-center">
                  <KioskoCard
                    kiosko_id={kioskos[index].kiosko_id}
                    design="style1"
                    text={kioskos[index].nombre}
                    subText={kioskos[index]?.name_shopping}
                    state={kioskos[index].state}
                    backgroundColor={
                      kioskos[index].state ? "#D5EAFB" : "#e8e8e8"
                    }
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
