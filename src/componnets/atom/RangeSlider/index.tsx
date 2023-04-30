import React from "react";

interface rangeProp {
  onChange: (x: any) => void;
  value?: number;
  label?: string | number;
  max: number;
  min: number;
  laeblClassName?: string;
  valueUpdate?: number;
}
const RangeSlider: React.FC<rangeProp> = ({
  onChange,
  max,
  min,
  label,
  value,
  valueUpdate,
  laeblClassName,
}) => {
  return (
    <div>
      <label
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${laeblClassName}`}
      >
        {label}
      </label>
      <input
        id="small-range"
        min={3}
        max={max}
        type="range"
        onChange={onChange}
        value={value}
        className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
      ></input>
      <div className={`flex justify-between ${laeblClassName}`}>
        <span>{min}</span>
        <span>{valueUpdate}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
