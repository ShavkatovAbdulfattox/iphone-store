import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import { useStateValue } from "../context/stateProvider";
import { MdOutlineDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";

import Map from "../assets/images/map.png";
import Empty from "../components/Empty/Empty";

function Cart() {
  const [{ cart }] = useStateValue();

  console.log(cart);

  return (
    <div className="h-[95vh] flex flex-col justify-between ">
      {cart.length <= 0 ? (
        <Empty />
      ) : (
        <main className="mt-20 mb-20">
          <section>
            <h2 className=" text-gray-500 font-bold text-xl mb-5 uppercase">
              Корзина
            </h2>
            <div className="flex justify-between items-start">
              <div className=" max-w-2xl w-1/2 ">
                <div className="min-h-[400px] max-h-[550px] overflow-y-auto px-5">
                  {cart.map((item, i) => {
                    return (
                      <article
                        key={i}
                        className="bg-white rounded-3xl py-5 px-7 flex flex-col items-end mb-5"
                      >
                        <motion.button
                          whileTap={{ scale: 0.7 }}
                          className="text-3xl text-red-500"
                        >
                          <MdOutlineDeleteForever />
                        </motion.button>
                        <div className="flex items-center gap-6 self-start">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-36 h-36 shadow-sm rounded-md object-cover"
                          />
                          <div className="">
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-gray-500 text-xl mt-2 font-bold">
                              {item.category}
                            </p>
                          </div>
                        </div>
                        <div className="self-start flex items-center justify-between w-full">
                          <div className="flex items-center mt-3">
                            <motion.button
                              whileTap={{ scale: 0.7 }}
                              className="text-4xl bg-orange-300 rounded-full text-white"
                            >
                              <BiMinus />
                            </motion.button>
                            <p className="text-2xl font-bold mx-3">
                              {item.amount}
                            </p>
                            <motion.button
                              whileTap={{ scale: 0.7 }}
                              className="text-4xl bg-orange-300 rounded-full text-white"
                            >
                              <BsPlus />
                            </motion.button>
                          </div>
                          <p className="text-xl font-mono">{item.cost}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* !Delivery */}
                <article className="bg-white rounded-3xl py-5 px-7 mt-4">
                  <h2 className="text-2xl font-bold mb-4">Доставка</h2>
                  <img src={Map} alt="map" className="px-1" />
                  <div className="flex justify-between items-center mt-5">
                    <h3 className="text-xl flex gap-2 items-center">
                      <RiTruckLine className="text-2xl" />
                      Доставка курьером
                    </h3>
                    <p className="text-xl font-mono">40 000 uz</p>
                  </div>
                </article>
              </div>
              <article className="bg-white rounded-3xl max-w-md w-[50%] ">
                <div className="flex justify-between py-5 px-7">
                  <h2 className="text-xl font-bold">ИТОГО</h2>
                  <p className="font-mono text-lg">900 000 000 UZ</p>
                </div>
                <button className="bg-black text-white w-full py-6 rounded-3xl text-2xl font-bold">
                  Перейти к оформлению
                </button>
              </article>
            </div>
          </section>
        </main>
      )}
      <Footer className="mt-7" />
    </div>
  );
}

export default Cart;
