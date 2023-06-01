export function setUserInformationToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("isLogged", true);
}
