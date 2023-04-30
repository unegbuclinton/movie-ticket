import RadioButton from "@/componnets/atom/RadioButton";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import PaymentMethod from "../../PaymentMethod";
import MasterCardForm from "../CardForm/MasterCardForm";
import PaypalForm from "../CardForm/PaypalForm";
import { IoIosRemove } from "react-icons/io";

interface noCardProp {
  text: string;
}
const NoCard: React.FC<noCardProp> = ({ text }) => {
  const [checkbox, setCheckBox] = useState<string>("masterCard");
  const [addForm, setAddForm] = useState<boolean>(false);
  const radio = [
    { title: "Master Card", id: "master", value: "masterCard" },
    { title: "Paypal", id: "paypal", value: "payPal" },
  ];
  const handleChange = (e: any) => {
    setCheckBox(e);
  };
  const cancelForm = () => {
    setAddForm(false);
  };
  const showForm = () => {
    setAddForm((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={showForm}
        className="flex cursor-pointer items-center gap-2 text-slate-gray"
      >
        <span>
          {!addForm && <GrAdd fill="#6B818C" />}
          {addForm && <IoIosRemove fill="#6B818C" />}
        </span>
        <p>{text}</p>
      </div>
      <div
        className={`${
          addForm ? "h-fit" : "h-0 overflow-hidden"
        } transition-all duration-200`}
      >
        <RadioButton
          radioData={radio}
          selectedValue={checkbox}
          legend=""
          onChange={handleChange}
          fieldStyle="flex gap-2 mt-4"
        />
        {checkbox === "masterCard" && <MasterCardForm onClick={cancelForm} />}
        {checkbox === "payPal" && <PaypalForm onClick={cancelForm} />}
      </div>
    </div>
  );
};

export default NoCard;
