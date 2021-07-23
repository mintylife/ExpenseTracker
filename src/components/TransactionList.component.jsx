import React, { useContext } from "react";
import { Transaction } from "./Transaction.component";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = (props) => {
  // const context = useContext(GlobalContext);
  // console.log(context.transactions);

  //can do above with destructing
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
