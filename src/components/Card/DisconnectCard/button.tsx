import React from "react";

interface ButtonProps {
  text: string; // Required text for the button
  icon?: string; // Optional icon URL
  onClick?: () => void; // Optional function for click event handling
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className="button"
      style={{
        border: "none",
        borderRadius: "6px",
        width: "104px",
        height: "33px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="button-icon"
        />
      )}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
