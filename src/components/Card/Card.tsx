import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import { useDesignStore } from "../../store/design.store";

interface CardProps {
  icon: string;
  text?: string;
  subText?: string;
  state?: boolean;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  text,
  backgroundColor,
  subText,
  state,
}) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";
  const { typeTypography } = useDesignStore();

  return (
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
          <div className="text_active">
            <p className={`text ${typeTypography}-text`}>{text}</p>
            <p className={`subtext ${typeTypography}-text`}>{subText}</p>
            <p className={`state ${typeTypography}-text`}>{state? "Conectado" : "Desconectado"}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
