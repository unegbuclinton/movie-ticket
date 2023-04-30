"use client";
import { MovieTime } from "@/utils/jsonData/MovieTime";
import React, { useState } from "react";

const ScreeningTime = () => {
  const [selectTime, setSelectTime] = useState<number | null>(null);
  const active = "bg-orange border-0";

  return (
    <div className="flex flex-wrap gap-2">
      {MovieTime?.map(({ text }, idx) => (
        <p
          key={idx}
          onClick={() => setSelectTime(idx)}
          className={`${
            selectTime === idx ? active : "border border-white"
          } py-2 px-4 rounded text-sm md:text-base  hover:bg-orange hover:text-white cursor-pointer `}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default ScreeningTime;
