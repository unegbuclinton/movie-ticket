import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  light,
  text,
  disabled,
  className,
  onClick,

  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${
        light ? "bg-platinum text-violet-blue " : "bg-raisin-black text-white"
      }  flex items-center gap-2 text-sm py-2 px-6 rounded font-bold text hover:scale-95 duration-200 md:text-xl ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
