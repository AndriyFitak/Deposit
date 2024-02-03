// depositReducer.js
import { createSlice } from "@reduxjs/toolkit";

const loadDepositsFromLocalStorage = () => {
  const deposits = JSON.parse(localStorage.getItem("deposits")) || [];
  return { deposits };
};

const initialState = loadDepositsFromLocalStorage();

export const depositSlice = createSlice({
  name: "deposits",
  initialState,
  reducers: {
    addDeposit: (state, action) => {
      const { initialAmount, months, interestRate } = action.payload;
      const finalAmount = calculateFinalAmount(initialAmount, months, interestRate);

      state.deposits.push({
        initialAmount,
        months,
        interestRate,
        finalAmount,
      });

      localStorage.setItem("deposits", JSON.stringify(state.deposits));
    },
    deleteDeposit: (state, action) => {
      const index = action.payload;
      state.deposits.splice(index, 1);
      localStorage.setItem("deposits", JSON.stringify(state.deposits));
    },
  },
});

export const { addDeposit, deleteDeposit } = depositSlice.actions;

export default depositSlice.reducer;

const calculateFinalAmount = (initialAmount, months, interestRate) => {
  return initialAmount * (1 + (interestRate / 100) * months);
};
