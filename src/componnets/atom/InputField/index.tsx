import ErrorMessage from "../ErrorMessage";
import { InputProps } from "./types";

const InputField: React.FC<InputProps> = ({
  label,
  name,
  type,
  styles,
  id,
  error,
  register,
  containerStyles,
}) => {
  return (
    <div className={`${containerStyles} mt-5`}>
      <label className="font-semibold text-sm text-gray-600 pb-1 block">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        name={name}
        id={id}
        className={`${styles} border rounded-lg dark:text-dark outline-none focus:border-violet-blue duration-200 px-3 py-2 mt-1 text-sm w-full`}
      />
      <ErrorMessage field={error} />
    </div>
  );
};

export default InputField;
