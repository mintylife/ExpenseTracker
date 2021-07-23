import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";



export const AddTransaction = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { transactions } = useContext(GlobalContext);





  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button className="btn" onClick={console.log(text)}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
