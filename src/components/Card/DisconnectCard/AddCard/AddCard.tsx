import React from "react";
import "../../Card.scss";

interface AddCardProps {
  icon: string;
  text?: string;
  backgroundColor?: string;
}

const AddCard: React.FC<AddCardProps> = ({ icon, text, backgroundColor }) => {
  const cardBackgroundColor = backgroundColor || "#F2F2F2 !mportant";

  return (
    <div
      className="add-card card"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <div className="container">
        <img
          className="add-icon"
          src={icon}
          alt="icon"
        />
        <p>
          <span>{text} </span>
        </p>
      </div>
    </div>
  );
};

export default AddCard;
