"use client";
import React, { useState } from "react";
import CardPayment from "../Card";
import NoCard from "../Card/CardTypes/NoCard";
import CardForm from "../Card/CardForm/MasterCardForm";

const PaymentMethod = () => {
  const [active, setActive] = useState<number>(0);
  const testCard: Array<any> = [{ card: "paypal" }, { card: "mastercard" }];
  //   const testCard: Array<any> = [];
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Payment Method</h2>
      {!!testCard.length && (
        <>
          {testCard.map(({ card }, idx) => (
            <CardPayment
              key={idx}
              cardtype={card}
              onClick={() => setActive(idx)}
              active={active === idx}
            />
          ))}
          <NoCard text="Add another method" />
        </>
      )}
      {testCard.length < 1 && (
        <>
          <NoCard text="Add a method" />
        </>
      )}
    </div>
  );
};

export default PaymentMethod;
