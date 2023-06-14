import React from "react";
import Cases from "../Cases/Cases";
import Headphones from "../Headphones/Headphones";
// import Airpods from "../Airpods/Airpods";
import { useStateValue } from "../../context/stateProvider";

function Main() {
  const [{ data }, dispatch] = useStateValue();


  return (
    <main className="flex-auto mb-20  ">
      <Cases />
      <Headphones data={data.headphones} />
      <Headphones data={data.airpods} />
    </main>
  );
}

export default Main;
