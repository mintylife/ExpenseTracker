//how we specify state changes in response to actions to the context - redux purpose
// redux helps us with making state changes when context changes i.t when new actions appear
// redux helps change state in response to context actions

export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state, //spread operator
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state, //spread operator
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};
