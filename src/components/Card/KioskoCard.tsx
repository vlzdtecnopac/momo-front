import React from "react";

import kioskoIcon from "../../assets/icons/kiosko.svg";
import addKioskoIcon from "../../assets/icons/green-kiosko.svg";
import "./Card.scss";
import { useDesignStore } from "../../store/design.store";

interface KioskoCardProps {
  connect: boolean;
  text?: string;
  backgroundColor?: string;
  subText?: string;
  state?: string;
}

const KioskoCard: React.FC<KioskoCardProps> = ({
  connect,
  text,
  backgroundColor,
  subText,
  state,
}) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";
  const { typeTypography } = useDesignStore();

  return (
    <>
      {connect ? (
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
            Desconectar
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
