import { UseFormRegister } from "react-hook-form";

export interface InputProps {
  label?: string;
  type: string;
  name: string;
  error?: string;
  id?: string;
  register: UseFormRegister<any>;
  containerStyles?: string;
  styles?: string;
}
