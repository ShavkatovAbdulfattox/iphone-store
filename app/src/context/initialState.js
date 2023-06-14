import { data } from "../utils/data";
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const logged =
  localStorage.getItem("isLogged") !== undefined
    ? JSON.parse(localStorage.getItem("isLogged"))
    : localStorage.clear();

export const InitialState = {
  user: userInfo,
  data: data,
  isUserLogged: logged,
  chooseDevice: "",
};
