// DepositForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDeposit } from "../redux/depositReducer";
import "./styles/DepositForm.css";

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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Initial Amount:
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Months:
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <label className="form-label">
          Interest Rate (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="form-button">
          Calculate and Add Deposit
        </button>
      </form>
    </div>
  );
};

export default DepositForm;
