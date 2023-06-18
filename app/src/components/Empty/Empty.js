import React from "react";
import EmptyImg from "../../assets/images/cart.png";
import { Link } from "react-router-dom";

function Empty() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl flex flex-col justify-center items-center mt-20">
        <img src={EmptyImg} alt="empty-cartr" />
        <h2 className="text-4xl tracking-wide mt-7">Корзина пуста</h2>
        <p className="text-xl mt-4">Но это никогда не поздно исправить :)</p>
        <Link
          to={"/"}
          className="bg-black text-white text-center  text-3xl font-semibold py-4 w-full  rounded-3xl shadow-lg mt-5"
        >
          В каталог товаров
        </Link>
      </div>
    </div>
  );
}

export default Empty;
