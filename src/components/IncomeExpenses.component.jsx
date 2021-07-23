import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = (props) => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = sum(amounts.filter((a) => a >= 0));
  const expenses = sum(amounts.filter((a) => a < 0));

  function sum(arr) {
    return arr.reduce((acc, i) => (acc += i), 0).toFixed(2);
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Income</h4>
        <p className="money minus">-${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
