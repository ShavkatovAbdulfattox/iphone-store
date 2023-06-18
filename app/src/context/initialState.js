import { dataCases, dataChargers } from "../utils/data";
import { fetchUser } from "../utils/fetchLocalStorageData";
import { countLikedCarts, getName } from "../utils/helper";

const userInfo = fetchUser();

const logged =
  localStorage.getItem("isLogged") !== undefined
    ? JSON.parse(localStorage.getItem("isLogged"))
    : localStorage.clear();

export const InitialState = {
  user: userInfo,
  dataCases: dataCases,
  dataChargers: dataChargers,
  isUserLogged: logged,
  cart: [],
  chooseDevice: "",
  amountOfLikedCarts: 0,
  categoryName: getName(dataCases),
};
