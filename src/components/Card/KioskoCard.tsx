import React, { useState } from "react";
import kioskoIcon from "../../assets/icons/kiosko.svg";
import addKioskoIcon from "../../assets/icons/green-kiosko.svg";
import { useDesignStore } from "../../store/design.store";
import { useShoppingStore } from "../../store/shopping.store";
import { LoaderPage } from "../../includes/loader/Loader";
import axiosInstance from "../../helpers/axios-instance.helpers";

import "./Card.scss";

type Designstyle = "style1" | "style2";

interface KioskoCardProps {
  kiosko_id?: string | undefined;
  design: Designstyle;
  text?: string;
  backgroundColor?: string;
  subText?: string;
  state?: boolean;
}

const KioskoCard: React.FC<KioskoCardProps> = ({
  kiosko_id,
  design,
  text,
  backgroundColor,
  subText,
  state,
}) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";
  const { data } = useShoppingStore();
  const { typeTypography } = useDesignStore();
  const [loader, setIsLoading] = useState<Boolean>(false);

  const handlerConnectKiosko = async (
    kiosko_id: string | undefined,
    state: boolean | undefined
  ) => {
    if (state) {
      if (kiosko_id != undefined) {
        setIsLoading(true);
        await axiosInstance.put(`/kioskos/${kiosko_id}`,
          {
            state: false,
            shopping_id: data[0]?.shopping_id,
          }
        );
      }
    } else {
      await axiosInstance.delete(`/kioskos/${kiosko_id}?shopping_id=${data[0]?.shopping_id}`);
    }
    setIsLoading(false);
  };

  const handlerAddKiosko = async () => {
    setIsLoading(true);
    const response = await axiosInstance.get(`/kioskos/?shopping_id=${data[0]?.shopping_id}`);
    let dataJson = {
      shopping_id: data[0].shopping_id,
      nombre: `Kiosko ${response.data.length + 1}`,
      state: false,
    };
    await axiosInstance.post(`/kioskos/`, dataJson);
    setIsLoading(false);
  };

  return (
    <>
      {loader ? <LoaderPage /> : ""}
      {design == "style1" ? (
        <>
          <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img className="icon" src={kioskoIcon} alt="icon" />
              <div className="text_active">
                <p className={`text ${typeTypography}-text`}>{text}</p>
                <p className={`text ${typeTypography}-text`}>{subText}</p>
                <p className={`state ${typeTypography}-text`}>{state}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => handlerConnectKiosko(kiosko_id, state)}
            className={`btn button-card ${typeTypography}-text`}
          >
            {state ? "Desconectar" : "Eliminar"}
          </button>
        </>
      ) : (
        <>
          <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img className="icon" src={addKioskoIcon} alt="icon" />
              <div className="text-add">
                <p>{text}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => handlerAddKiosko()}
            className=" btn button-card"
          >
            Adjuntar
          </button>
        </>
      )}
    </>
  );
};

export default KioskoCard;
