import React from "react";

import kioskoIcon from "../../assets/icons/kiosko.svg";
import addKioskoIcon from "../../assets/icons/green-kiosko.svg";

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

  return (
    <>
      {connect ? (
        <>
          <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img className="icon" src={kioskoIcon} alt="icon" />
              <p className="text_active">
                <span>{text}</span>
                <br />
                <span>{subText}</span>
                <br />
                {state}
              </p>
            </div>
          </div>
          <button className=" btn button-card">Desconectar</button>
        </>
      ) : (
        <>
          <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img className="icon" src={addKioskoIcon} alt="icon" />
              <p className="text-add">
                <span>{text}</span>
              </p>
            </div>
          </div>
          <button className=" btn button-card">Adjuntar</button>
        </>
      )}
    </>
  );
};

export default KioskoCard;
