export const actionType = {
  SET_ISUSERLOGGED: "SET_ISUSERLOGGED",
  SET_ISSIGN: "SET_ISSIGN",
  SET_USER: "SET_USER",
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
    default:
      return state;
  }
}

export default reducer;
