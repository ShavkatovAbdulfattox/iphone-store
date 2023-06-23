import React, { useEffect, useState } from "react";
import Cases from "../Cases/Cases";
import Headphones from "../Headphones/Headphones";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
// import { dataChargers } from "../../utils/data";
// import { actionType } from "../../context/reducer";

function Main() {
  const [{ dataCases, dataChargers, chooseDevice }, dispatch] =
    useStateValue();
  const [amountOfLikedCases, setAmountOfLikedCases] = useState(0);
  const [amountOfLikedChargers, setAmountOfLikedChargers] = useState(0);
  const [addCartCases, setAddCartCases] = useState([]);
  const [addCartChargers, setAddCartChargers] = useState([]);
  const [addSavedCases, setAddSavedCases] = useState([]);
  const [addSavedChargers, setAddSavedChargers] = useState([]);



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
  }, [addCartCases, addCartChargers,dispatch]);

  useEffect(() => {  
    dispatch({
      type: actionType.SET_SAVED,
      saved: [...addSavedCases,...addSavedChargers],
    });
  }, [addSavedCases, addSavedChargers,dispatch]);


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
        setAddToSaved={setAddSavedCases}
      />
      <Headphones
        data={dataChargers}
        category={deviceSelected ? "Iphone 11" : chooseDevice}
        setAmoutOfSaved={setAmountOfLikedChargers}
        setAddToCart={setAddCartChargers}
        setAddToSaved={setAddSavedChargers}
      />
    </main>
  );
}

export default Main;
