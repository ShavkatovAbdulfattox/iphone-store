export const actionType = {
  SET_PHONES: "SET_PHONES",
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case actionType.SET_PHONES:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
