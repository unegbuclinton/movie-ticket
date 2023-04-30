import React from "react";
import { radioProps } from "./types";

const RadioButton: React.FC<radioProps> = ({
  onChange,
  selectedValue,
  legend,
  radioData,
  fieldStyle,
}) => {
  return (
    <fieldset className={`"mb-5 ${fieldStyle}`}>
      <legend className="mb-2">{legend}</legend>

      {radioData?.map(({ title, id, value }, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <input
            id={id}
            type="radio"
            name={title}
            value={value}
            checked={value === selectedValue}
            onChange={() => onChange(value)}
            className="h-4 w-4 border-gray-300 cursor-pointer focus:ring-2 focus:ring-blue-300"
          />
          <label className="text-sm font-medium text-gray-900 ml-2 block">
            {title}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioButton;
