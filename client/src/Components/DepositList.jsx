// DepositList.js
import React from "react";
import { useSelector } from "react-redux";

const DepositList = () => {
  const deposits = useSelector((state) => state.deposits.deposits);

  return (
    <div>
      <h2>Deposit List</h2>
      <ul>
        {deposits.map((deposit, index) => (
          <li key={index}>
            Initial Amount: ${deposit.initialAmount}, Months: {deposit.months}, 
            Interest Rate: {deposit.interestRate}%, Final Amount: ${deposit.finalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepositList;
