import Button from "@/componnets/atom/Button";
import InputField from "@/componnets/atom/InputField";
import { PayPalcardSchema, cardSchema } from "@/utils/schema/CardSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  payID: number;
};

interface paypalProp {
  onClick: () => void;
}
const PaypalForm: React.FC<paypalProp> = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(PayPalcardSchema),
  });
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl"> PayPal Card Information</h1>
      <h2>Fill in your details in the boxes provided</h2>
      <InputField
        register={register}
        label="Email"
        name="email"
        id="email"
        type="email"
        error={errors.email?.message}
      />
      <InputField
        register={register}
        label="PayPal ID"
        name="payID"
        id="payID"
        type="number"
        error={errors.payID?.message}
      />
      <div className="flex gap-4 justify-end mt-5">
        <Button text="Add Card" type="submit" />
        <Button text="Cancel" type="button" onClick={onClick} />
      </div>
    </form>
  );
};

export default PaypalForm;
