import * as yup from "yup";
export const cardSchema = yup.object().shape({
  cardName: yup.string().required("Name is required"),
  cardNumber: yup.string().required("Add card number"),
  expiryDate: yup.string().required("Add card expiry date"),
  cvc: yup.string().required("Add card cvc"),
});

export const PayPalcardSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  payID: yup.string().required("Id is required"),
});
