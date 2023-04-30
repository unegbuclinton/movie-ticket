import { ReactNode } from "react";

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  light?: boolean;
  text: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  loading?: string;
  onClick?: () => void;
}
