export const actionType = {
  SET_ISUSERLOGGED: "SET_ISUSERLOGGED",
  SET_ISSIGN: "SET_ISSIGN",
  SET_USER: "SET_USER",
  SET_DEVICE: "SET_DEVICE",
  SET_SAVE: "SET_SAVE",
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case actionType.SET_ISUSERLOGGED:
      return {
        ...state,
        isUserLogged: action.isUserLogged,
      };
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_DEVICE:
      return {
        ...state,
        chooseDevice: action.chooseDevice,
      };
    case actionType.SET_SAVE:
      return {
        ...state,
        amountOfSavedCarts: action.amountOfSavedCarts,
      };
    default:
      return state;
  }
}

export default reducer;
