import React from "react";

export const Transaction = ({ transaction }) => {
  const [ signClass, sign ] =
      transaction.amount > 0 ? ["plus", "+"] : ["minus", "-"];
  return (
    <li className={signClass}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
