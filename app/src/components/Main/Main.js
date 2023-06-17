import React, { useEffect, useState } from "react";
import Cases from "../Cases/Cases";
import Headphones from "../Headphones/Headphones";
// import Airpods from "../Airpods/Airpods";
import { useStateValue } from "../../context/stateProvider";
import { getName } from "../../utils/helper";
import { actionType } from "../../context/reducer";
// import { dataChargers } from "../../utils/data";
// import { actionType } from "../../context/reducer";

function Main() {
  const [{ dataCases, dataChargers, chooseDevice }, dispatch] = useStateValue();
  const [amountOfLikedCases, setAmountOfLikedCases] = useState(0);
  const [amountOfLikedChargers, setAmountOfLikedChargers] = useState(0);

  // const [bigDataCases, setBigDataCases] = useState(dataCases);

  useEffect(() => {
    dispatch({
      type: actionType.SET_SAVE,
      amountOfLikedCarts: amountOfLikedCases + amountOfLikedChargers,
    });
  }, [amountOfLikedCases, amountOfLikedChargers, dispatch]);

  const deviceSelected =
    chooseDevice === "Выбрать модель телефона" || chooseDevice === "";
  return (
    <main className="flex-auto mb-20  ">
      <Cases />
      <Headphones
        data={dataCases}
        category={deviceSelected ? "Iphone 11" : chooseDevice}
        setAmoutOfSaved={setAmountOfLikedCases}
      />
      <Headphones
        data={dataChargers}
        category={deviceSelected ? "Iphone 11" : chooseDevice}
        setAmoutOfSaved={setAmountOfLikedChargers}
      />
    </main>
  );
}

export default Main;
