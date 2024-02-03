// DepositList.js
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteDeposit } from "../redux/depositReducer";
import "./styles/DepositList.css";

const DepositList = () => {
  const dispatch = useDispatch();
  const deposits = useSelector((state) => state.deposits.deposits);

  const handleDelete = (index) => {
    dispatch(deleteDeposit(index));
  };

  return (
    <div className="deposit-list-container">
      <h2>Deposit List</h2>
      <ul className="deposit-list">
        {deposits.map((deposit, index) => (
          <li key={index} className="deposit-item">
            <div className="deposit-details">
              <p>Initial Amount: ${deposit.initialAmount}</p>
              <p>Months: {deposit.months}</p>
              <p>Interest Rate: {deposit.interestRate}%</p>
              <p className="final-price">Final Amount: ${deposit.finalAmount}</p>
            </div>
            <button onClick={() => handleDelete(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepositList;

