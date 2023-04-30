import React from "react";

interface overviewProp {
  text: string;
}
const OverviewText: React.FC<overviewProp> = ({ text }) => {
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">OverView</h1>
      <p className="text-base lg:max-w-[80%]">{text}</p>
    </div>
  );
};

export default OverviewText;
