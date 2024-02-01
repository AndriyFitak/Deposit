// DepositForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDeposit } from "../redux/depositReducer";

const DepositForm = () => {
  const dispatch = useDispatch();
  const [initialAmount, setInitialAmount] = useState("");
  const [months, setMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDeposit({ initialAmount, months, interestRate }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Initial Amount:
        <input
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(e.target.value)}
        />
      </label>
      <label>
        Months:
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </label>
      <label>
        Interest Rate:
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>
      <button type="submit">Add Deposit</button>
    </form>
  );
};

export default DepositForm;
