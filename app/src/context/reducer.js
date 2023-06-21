export const actionType = {
  SET_ISUSERLOGGED: "SET_ISUSERLOGGED",
  SET_ISSIGN: "SET_ISSIGN",
  SET_USER: "SET_USER",
  SET_DEVICE: "SET_DEVICE",
  SET_SAVE: "SET_SAVE",
  SET_CATEGORY: "SET_CATEGORY",
  SET_CART: "SET_CART",
  SET_DATA_CASES: "SET_DATA_CASES",
  SET_DATA_CHARGERS: "SET_DATA_CHARGERS",
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
        amountOfLikedCarts: action.amountOfLikedCarts,
      };
    case actionType.SET_CATEGORY:
      return {
        ...state,
        categoryName: action.categoryName,
      };
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };
    case actionType.SET_DATA_CASES:
      return {
        ...state,
        cart: action.cart,
      };
    case actionType.SET_DATA_CHARGERS:
      return {
        ...state,
        cart: action.cart,
      };
    default:
      return state;
  }
}

export default reducer;
