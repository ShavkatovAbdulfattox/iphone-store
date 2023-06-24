import React from "react";
import { iphone12 } from "../../utils/data";

function Cases() {
  return (
    <section className="container ">
      <h2 className=" text-gray-500 font-bold md:text-2xl text-lg mb-5 md:text-left text-center uppercase">Чехлы</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center">
        {iphone12.map(({ type, img }, i) => {
          return (
            <a
              href="#"
              className="sm:h-auto h-225 flex flex-col justify-center items-center w-[80%] basis-96 p-6 pb-12 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              key={i}
            >
              <img src={img} alt="type" className="h-[80%]"/>{" "}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                {type}
              </h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Cases;
