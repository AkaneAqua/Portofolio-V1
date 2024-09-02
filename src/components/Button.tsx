import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, className}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white py-2 px-4 rounded hover:bg-blue-700 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
