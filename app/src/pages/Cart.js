import React from "react";
import Empty from "../assets/images/cart.png";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <div className="h-[95vh] flex flex-col justify-between ">
      <div className="flex justify-center">
        <div className="max-w-xl flex flex-col justify-center items-center mt-20">
          <img src={Empty} alt="empty-cartr" />
          <h2 className="text-5xl tracking-wide mt-7">Корзина пуста</h2>
          <p className="text-2xl mt-4">Но это никогда не поздно исправить :)</p>
          <Link to={"/"} className="bg-black text-white text-center  text-3xl font-semibold py-5 w-full rounded-3xl shadow-lg mt-5">В каталог товаров</Link>
        </div>
      </div>
      <Footer className="mt-7"/>
    </div>
  );
}

export default Cart;
