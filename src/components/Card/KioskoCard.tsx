import React from "react";

import kioskoIcon from "../../assets/icons/kiosko.svg";
import addKioskoIcon from "../../assets/icons/green-kiosko.svg";
import "./Card.scss";
import { useDesignStore } from "../../store/design.store";

type Designstyle = "style1" | "style2"

interface KioskoCardProps {
  design: Designstyle;
  text?: string;
  backgroundColor?: string;
  subText?: string;
  state?: boolean;
}

const KioskoCard: React.FC<KioskoCardProps> = ({
  design,
  text,
  backgroundColor,
  subText,
  state,
}) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";
  const { typeTypography } = useDesignStore();

  return (
    <>
      {design == "style1"? (
        <>
          <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img
                className="icon"
                src={kioskoIcon}
                alt="icon"
              />
              <div className="text_active">
                <p className={`text ${typeTypography}-text`}>{text}</p>
                <p className={`text ${typeTypography}-text`}>{subText}</p>
                <p className={`state ${typeTypography}-text`}>{state}</p>
              </div>
            </div>
          </div>
          <button className={`btn button-card ${typeTypography}-text`}>
            {state ? "Desaconectar" :  "Conectar"}
          </button>
        </>
      ) : (
        <>
          <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img
                className="icon"
                src={addKioskoIcon}
                alt="icon"
              />
              <div className="text-add">
                <p>{text}</p>
              </div>
            </div>
          </div>
          <button className=" btn button-card">Adjuntar</button>
        </>
      )}
    </>
  );
};

export default KioskoCard;
