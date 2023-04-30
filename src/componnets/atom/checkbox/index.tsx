import React from "react";
import { checkboxProp } from "./types";

const Checkbox: React.FC<checkboxProp> = ({
  checkboxData,
  onChange,
  legend,
  selectedValue,
}) => {
  return (
    <fieldset className="mb-5">
      <legend className="mb-2">{legend}</legend>
      {checkboxData?.map(({ title, value, id }, idx) => (
        <div key={idx}>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              value={value}
              id={id}
              checked={value === selectedValue}
              onChange={() => onChange(value)}
            />
            <span className="ml-2 text-gray-700">{title}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default Checkbox;
