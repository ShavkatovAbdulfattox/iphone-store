export function setUserInformationToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("isLogged", true);
}

export function getName(data) {
  const categoryName = data.map((item) => item.name);
  return [...new Set(categoryName)];
}

export const countLikedCarts = (data) =>
  data.reduce((acc, cur) => {
    if (cur.favourite === true) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
