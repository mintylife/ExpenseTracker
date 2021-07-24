import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


export const Transaction = ({ transaction }) => {
  const [ signClass, sign ] =
    transaction.amount >= 0 ? ["plus", "+"] : ["minus", "-"];
  
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={signClass}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};
