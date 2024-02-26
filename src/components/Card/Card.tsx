import React from "react";
import "./Card.scss";

interface CardProps {
  icon: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <div className="card">
      <div className="container">
        <img
          className="icon"
          src={icon}
          alt="icon"
        />
        <p>
          <span>{text}</span> <br />
          <span>Tienda 1</span> <br />
          Conectado
        </p>
      </div>
    </div>
  );
};

export default Card;
