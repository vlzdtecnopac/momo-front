import React from "react";
import "../Card.scss";
import { Link } from "react-router-dom";
import Button from "./button";

interface DisconnectCardProps {
  icon: string;
  text: string;
  backgroundColor?: string;
  subText?: string;
  state?: string;
}

const DisconnectCard: React.FC<DisconnectCardProps> = ({
  icon,
  text,
  backgroundColor,
  subText,
  state,
}) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";

  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: cardBackgroundColor }}
      >
        <div className="container">
          <img
            className="icon"
            src={icon}
            alt="icon"
          />
          <p>
            <span>{text}</span>
            <br />
            <span>{subText}</span>
            <br />
            {state}
          </p>
        </div>
        <button className=" btn disconnect-btn">Desconectar</button>
      </div>
    </>
  );
};

export default DisconnectCard;
