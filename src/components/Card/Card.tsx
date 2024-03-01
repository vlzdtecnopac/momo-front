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
    <Link to="/success">
      <div
            className="card"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div className="container">
              <img className="icon" src={icon} alt="icon" />
              <div className="text_active">
                <p>{text}</p>
                <p>{subText}</p>
                <p>{state}</p>
              </div>
            </div>
          </div>
    </Link>
  );
};

export default Card;
