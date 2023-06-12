import React from "react";
import Cases from "../Cases/Cases";
import Headphones from "../Headphones/Headphones";
import Airpods from "../Airpods/Airpods";

function Main() {
  return (
    <main className="flex-auto">
      <Cases />
      <Headphones />
      <Airpods />
    </main>
  );
}

export default Main;
