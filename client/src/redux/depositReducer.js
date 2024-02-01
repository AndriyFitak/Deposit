// depositReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deposits: [],
};

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
    },
  },
});

export const { addDeposit } = depositSlice.actions;

export default depositSlice.reducer;

// Функція для розрахунку кінцевої суми
const calculateFinalAmount = (initialAmount, months, interestRate) => {
  // Логіка для розрахунку кінцевої суми - вставте свою формулу тут
  return initialAmount * (1 + (interestRate / 100) * months);
};
