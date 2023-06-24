import React from "react";
import EmptyImg from "../../assets/images/cart.png";
import { Link } from "react-router-dom";

function Empty() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl flex flex-col justify-center items-center mt-20">
        <img src={EmptyImg} alt="empty-cartr" className="md:w-auto w-3/4"/>
        <h2 className="md:text-4xl text-2xl tracking-wide md:mt-7 mt-4">Корзина пуста</h2>
        <p className="md:text-xl text-lg md:mt-4 mt-2">Но это никогда не поздно исправить :)</p>
        <Link
          to={"/"}
          className="bg-black text-white text-center  md:text-3xl text-xl font-semibold md:py-4 py-2 w-full  rounded-3xl shadow-lg md:mt-5 mt-3"
        >
          В каталог товаров
        </Link>
      </div>
    </div>
  );
}

export default Empty;
