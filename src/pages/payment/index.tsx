import PaymentMethod from "@/componnets/molecules/PaymentMethod";
import { SummaryData } from "@/utils/jsonData/SummaryData";
import React from "react";

const Payment = () => {
  return (
    <div className="px-10 py-8">
      <div className="flex gap-2 lg:gap-20 mb-5">
        <img
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg"
          alt=""
          className="w-[30%] rounded h-[30%]"
        />
        <div className="text-sm">
          <h2>Shazam</h2>
          <p className="text-sx">
            Seat-No: <span className="font-semibold"> G14,</span>
            <span className="font-semibold"> G15,</span>
          </p>
          <p>
            July 24th <span>2:45pm</span>
          </p>
          <div className="hidden lg:block">
            <div>
              {SummaryData?.map(({ title, value }, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-3 pb-4 border-b border-dashed">
                    <p className="text-gray-500">{title}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-10">
              <p className="text-gray-500">Total Amount</p>
              <p className="text-xl font-bold">$240.00</p>
            </div>
            <PaymentMethod />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div>
          {SummaryData?.map(({ title, value }, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-3 pb-4 border-b border-dashed">
                <p className="text-gray-500">{title}</p>
                <p className="font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-10">
          <p className="text-gray-500">Total Amount</p>
          <p className="text-xl font-bold">$240.00</p>
        </div>
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Payment;
