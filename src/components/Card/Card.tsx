import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

interface CardProps {
  icon: string;
  text?: string;
  subText?: string;
  state?: string;
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

  return (
    <Link to="/dashboard">
      <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img className="icon" src={icon} alt="icon" />
              <p className="text_active">
                <span>{text}</span>
                <br />
                <span>{subText}</span>
                <br />
                {state}
              </p>
            </div>
          </div>
    </Link>
  );
};

export default Card;
