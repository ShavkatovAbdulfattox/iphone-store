import React, { useEffect, useState } from "react";
import Cases from "../Cases/Cases";
import Headphones from "../Headphones/Headphones";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
// import { dataChargers } from "../../utils/data";
// import { actionType } from "../../context/reducer";

function Main() {
  const [{ dataCases, dataChargers, chooseDevice, cart }, dispatch] =
    useStateValue();
  const [amountOfLikedCases, setAmountOfLikedCases] = useState(0);
  const [amountOfLikedChargers, setAmountOfLikedChargers] = useState(0);
  const [addCartCases, setAddCartCases] = useState([]);
  const [addCartChargers, setAddCartChargers] = useState([]);

  useEffect(() => {
    dispatch({
      type: actionType.SET_SAVE,
      amountOfLikedCarts: amountOfLikedCases + amountOfLikedChargers,
    });
  }, [amountOfLikedCases, amountOfLikedChargers, dispatch]);

  useEffect(() => {
    dispatch({
      type: actionType.SET_CART,
      cart: [...addCartCases, ...addCartChargers],
    });
  }, [addCartCases, addCartChargers]);



  const deviceSelected =
    chooseDevice === "Выбрать модель телефона" || chooseDevice === "";
  return (
    <main className="flex-auto mb-20  ">
      <Cases />
      <Headphones
        data={dataCases}
        category={deviceSelected ? "Iphone 11" : chooseDevice}
        setAmoutOfSaved={setAmountOfLikedCases}
        setAddToCart={setAddCartCases}
      />
      <Headphones
        data={dataChargers}
        category={deviceSelected ? "Iphone 11" : chooseDevice}
        setAmoutOfSaved={setAmountOfLikedChargers}
        setAddToCart={setAddCartChargers}
      />
    </main>
  );
}

export default Main;
