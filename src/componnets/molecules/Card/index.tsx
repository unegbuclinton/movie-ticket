import React from "react";
import { IoIosMore, IoMdCheckmark } from "react-icons/io";
import { RiMastercardFill } from "react-icons/ri";
import { GrPaypal } from "react-icons/gr";

interface cardProp {
  cardtype?: string;
  onClick: (x: any) => void;
  active: boolean;
}

const CardPayment: React.FC<cardProp> = ({ cardtype, onClick, active }) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-4 bg-light-grey rounded-lg border-2 mb-3 ${
        active ? "border-orange" : ""
      }`}
    >
      <div className="flex justify-end mb-3 cursor-pointer">
        <IoIosMore />
      </div>
      {cardtype === "mastercard" && (
        <>
          <div className="flex justify-between mb-5">
            <p className="font-semibold">Paypal</p>
            <GrPaypal size={30} />
          </div>
          <div className="flex justify-between">
            <p>samsosa@yahoo.com</p>
          </div>
        </>
      )}

      {cardtype === "paypal" && (
        <>
          <div className="flex justify-between mb-5" onClick={onClick}>
            <p className="font-semibold">MasterCard</p>
            <RiMastercardFill size={30} />
          </div>
          <div className="flex justify-between">
            <p>**** **** **** 2535</p>
            <p>09/25</p>
          </div>
        </>
      )}
      {active && (
        <div className="absolute right-0 bottom-0 bg-orange p-1 rounded w-fit">
          <IoMdCheckmark color="#fff" />
        </div>
      )}
    </div>
  );
};

export default CardPayment;
