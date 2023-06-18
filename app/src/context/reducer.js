export const actionType = {
  SET_ISUSERLOGGED: "SET_ISUSERLOGGED",
  SET_ISSIGN: "SET_ISSIGN",
  SET_USER: "SET_USER",
  SET_DEVICE: "SET_DEVICE",
  SET_SAVE: "SET_SAVE",
  SET_CATEGORY: "SET_CATEGORY",
  SET_CART: "SET_CART",
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
    default:
      return state;
  }
}

export default reducer;
