import React from "react";
import { selectProp } from "./type";

const Dropdown: React.FC<selectProp> = ({ label }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue="Sort Options">Sort Option</option>
        <option value="US">Popularity Descending</option>
        <option value="CA">Popularity Assending</option>
        <option value="FR">Rating Assending</option>
        <option value="DE">Rating Desending</option>
      </select>
    </div>
  );
};

export default Dropdown;
