//how we specify state changes in response to actions to the context - redux purpose
// redux helps us with making state changes when context changes i.t when new actions appear
// redux helps change state in response to context actions

export default (state, action) => {
    switch (action.type) { //delete trnasaction, add transaction, default
        default:
            return state;
    }
};
