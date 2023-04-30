"use client";
import Bullet from "@/componnets/atom/Bullet/index.";
import { SeatOptions } from "@/utils/jsonData/SeatOptions";
import React, { useState } from "react";

const ScreeningSeats = () => {
  const [occupiedSeats, setOccupiedSeats] = useState<number[]>([]);
  const nullSeats = [0, 1, 2, 37, 36];
  const reservedSeats = [22, 25, 44, 12, 11, 16, 15];
  const takenSeats = [21, 28, 30, 35, 34, 4, 43, 10];
  const total = 45;
  const arr = Array.from({ length: total }, (_, index) => index + 1);

  const addSeat = (seat: number) => {
    if (occupiedSeats.includes(seat)) {
      setOccupiedSeats(occupiedSeats.filter((x) => x !== seat));
    } else {
      setOccupiedSeats([...occupiedSeats, seat]);
    }
  };

  return (
    <>
      <div className="grid justify-center grid-cols-6 gap-y-3 gap-x-1 lg:gap-y-5 lg:gap-x-2">
        {arr?.map((_, index) => (
          <div
            key={index}
            onClick={() => addSeat(index)}
            className={`${
              takenSeats.includes(index)
                ? "bg-orange border pointer-events-none border-white"
                : "bg-raisin-black"
            } 
      ${occupiedSeats.includes(index) ? "bg-slate-gray border-white" : ""} 
      ${reservedSeats.includes(index) ? "pointer-events-none bg-white" : ""} 
      ${
        nullSeats.includes(index) ? "bg-transparent pointer-events-none" : ""
      } flex items-center justify-center w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] text-black font-semibold  cursor-pointer hover:scale-125 rounded duration-150`}
          >
            {takenSeats.includes(index) ||
            occupiedSeats.includes(index) ||
            reservedSeats.includes(index)
              ? index + 1
              : null}
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center py-4">
        {SeatOptions?.map(({ text, color }, idx) => {
          return (
            <div key={idx} className="flex gap-2 items-center justify-center">
              <Bullet color={color} />
              {text}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScreeningSeats;
