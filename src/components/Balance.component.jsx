import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = (props) => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const balance = amounts.reduce((acc, i) => acc+=i, 0).toFixed(2);
    const sign = balance >= 0 ? '' : '-';

  return (
    <>
      <h4>Your balance</h4>
          <h1>{sign}${balance}</h1>
    </>
  );
};
