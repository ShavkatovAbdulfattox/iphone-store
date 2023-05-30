import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
console.log(userInfo);

const logged =  localStorage.getItem("isLogged")!== undefined ?JSON.parse(localStorage.getItem("isLogged")) : localStorage.clear() ;
console.log(logged);

export const InitialState = {
  user: userInfo,
  isUserLogged: logged,
};
