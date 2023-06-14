export function setUserInformationToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("isLogged", true);
}

export function countFavAmount(data) {
  let amount = 0;

  for (const [key, items] of Object.entries(data)) {
    items.map((item) => {
      if (item.favourite) {
        return (amount += 1);
      } else {
        return amount;
      }
    });
  }
  
  return amount;
}
