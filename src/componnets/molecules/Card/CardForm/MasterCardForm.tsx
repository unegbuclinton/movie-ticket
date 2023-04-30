import Button from "@/componnets/atom/Button";
import InputField from "@/componnets/atom/InputField";
import { cardSchema } from "@/utils/schema/CardSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  cardName: string;
  cardNumber: string;
  expiryDate: number;
  cvc: number;
};
interface masterCardProp {
  onClick: () => void;
}
const MasterCardForm: React.FC<masterCardProp> = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(cardSchema),
  });
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl"> Master Card Information</h1>
      <h2>Fill in your details in the boxes provided</h2>
      <InputField
        register={register}
        label="Card Name"
        name="cardName"
        id="cardName"
        type="text"
        error={errors.cardName?.message}
      />
      <InputField
        register={register}
        label="Card Number"
        name="cardNumber"
        id="cardNumber"
        type="text"
        error={errors.cardNumber?.message}
      />
      <div className="flex gap-2">
        <InputField
          register={register}
          label="Expiry Date"
          name="expiryDate"
          id="expiryDate"
          type="number"
          error={errors.expiryDate?.message}
        />
        <InputField
          register={register}
          label="CVC"
          name="cvc"
          id="cvc"
          type="number"
          error={errors.cvc?.message}
        />
      </div>
      <div className="flex gap-4 justify-end mt-5">
        <Button text="Add Card" type="submit" />
        <Button text="Cancel" type="button" onClick={onClick} />
      </div>
    </form>
  );
};

export default MasterCardForm;
