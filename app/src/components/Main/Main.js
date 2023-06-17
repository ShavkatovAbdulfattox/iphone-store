import React, { useState } from "react";
import Cases from "../Cases/Cases";
import Headphones from "../Headphones/Headphones";
// import Airpods from "../Airpods/Airpods";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";

function Main() {
  const [{ data, amountOfLikedCarts }, dispatch] = useStateValue();


  return (
    <main className="flex-auto mb-20  ">
      <Cases />
      <Headphones
        data={data.headphones}
        bigData={data}
      />
      <Headphones data={data.airpods} 
        bigData={data}
      
      />
    </main>
  );
}

export default Main;
