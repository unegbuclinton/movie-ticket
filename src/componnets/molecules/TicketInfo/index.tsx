"use client";

import Button from "@/componnets/atom/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ScreeningSeats from "../SreeningSeats";
import ScreeningTime from "../ScreeningTime";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TicketInfo = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1 className="text-center mb-5 text-2xl font-semibold">
        Select Screening Seats
      </h1>
      <ScreeningSeats />
      <ScreeningTime />
      <DatePicker
        placeholderText="Click to select a date"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        className="text-black w-[35%] rounded py-1 px-4 mt-3 cursor-pointer hover:bg-white/75"
      />
      <div className="flex gap-3 mt-10">
        <Button
          type="button"
          text="Back"
          onClick={() => router.push("/movieoverview")}
        />
        <Button
          type="button"
          text="Pay $150"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default TicketInfo;
