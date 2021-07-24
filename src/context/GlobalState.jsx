import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  //   transactions: [
  //     { id: 1, text: "Flowers", amount: -20 },
  //     { id: 2, text: "Salary", amount: 1540 },
  //     { id: 3, text: "Taxes", amount: -230 },
  //   ],
  transactions: [],
};

// Global state made available throught exporting
export const GlobalContext = createContext(initialState);

//Provider makes sure other components have access to the globalState
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); //why initialState and not GlobalContext here?

  function deleteTransaction(id) {
    //this sends it to appreducer.jsx
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    //this sends it to appreducer.jsx
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    //making globally available transactions and functions
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
