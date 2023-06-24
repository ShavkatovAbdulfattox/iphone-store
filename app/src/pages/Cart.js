import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { useStateValue } from "../context/stateProvider";
import { MdOutlineDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";

import Map from "../assets/images/map.png";
import Empty from "../components/Empty/Empty";
import { toast } from "react-toastify";
import { actionType } from "../context/reducer";
import Order from "../components/Order/Order";

function Cart() {
  const [{ cart, dataChargers, dataCases }, dispatch] = useStateValue();
  const [boughtProduct, setBoughtProduct] = useState(cart);
  const [order, setOrder] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0); // Initialize with 0


  useEffect(() => {
    calculateTotalAmount(); // Calculate the initial total amount
  }, [boughtProduct]); // Run the effect whenever boughtProduct changes

  const deleteItem = (index) => {
    const updatedProduct = [...boughtProduct];
    updatedProduct[index].amount = 1; // Update the amount of the deleted item to 1
    const updateCart = updatedProduct.filter((_, i) => i !== index);
    setBoughtProduct(updateCart);

    toast.error("Удалено из корзины", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
    dispatch({
      type: actionType.SET_CART,
      cart: updateCart,
    });

    updateState(index); // Pass the index of the deleted item to the updateState function
  };

  function updateState(deletedIndex) {
    // Update the respective data array
    const updateDataCases = dataCases.map((item, i) => {
      if (i === deletedIndex) {
        item.amount = 1; // Set the amount of the deleted item to 1
        item.cart = false;
      }
      return item;
    });
    const updateDataChargers = dataChargers.map((item, i) => {
      if (i === deletedIndex) {
        item.amount = 1; // Set the amount of the deleted item to 1
        item.cart = false;
      }
      return item;
    });

    dispatch({
      type: actionType.SET_DATA_CASES,
      dataCases: updateDataCases,
    });

    dispatch({
      type: actionType.SET_DATA_CHARGERS,
      dataChargers: updateDataChargers,
    });
  }
  function calculateTotalAmount() {
    const updatedTotalAmount = boughtProduct.reduce((acc, cur) => {
      const price = cur.cost.replace("UZS", "").replaceAll(",", "") / 100;
      return acc + price * cur.amount;
    }, 0);
    setTotalAmount(updatedTotalAmount);
  }

  const incOrDecAmount = (action, index) => {
    if (action === "inc") {
      const incAmount = [...boughtProduct];
      if (incAmount[index].amount >= 10) return;
      incAmount[index].amount++;
      setBoughtProduct(incAmount);
    }
    if (action === "dec") {
      const decAmount = [...boughtProduct];
      if (decAmount[index].amount <= 1) return;
      decAmount[index].amount--;
      setBoughtProduct(decAmount);
    }
  };

  return (
    <div className="h-[95vh] flex flex-col justify-between ">
      {order ? (
        <Order data={boughtProduct} total={totalAmount} />
      ) : (
        <>
          {boughtProduct.length <= 0 ? (
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
                      {boughtProduct.map((item, i) => {
                        return (
                          <article
                            key={i}
                            className="bg-white rounded-3xl py-5 px-7 flex flex-col items-end mb-5"
                          >
                            <motion.button
                              whileTap={{ scale: 0.7 }}
                              className="text-3xl text-red-500"
                              onClick={() => deleteItem(i)}
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
                                  onClick={() => incOrDecAmount("dec", i)}
                                >
                                  <BiMinus />
                                </motion.button>
                                <p className="text-2xl font-bold mx-3">
                                  {item.amount}
                                </p>
                                <motion.button
                                  whileTap={{ scale: 0.7 }}
                                  className="text-4xl bg-orange-300 rounded-full text-white"
                                  onClick={() => incOrDecAmount("inc", i)}
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
                      <p className="font-mono text-lg">
                        {new Intl.NumberFormat("en-US").format(totalAmount)},00
                        UZS
                      </p>
                    </div>
                    <button
                      className="bg-black text-white w-full py-6 rounded-3xl text-2xl font-bold"
                      onClick={() => setOrder(!order)}
                    >
                      Перейти к оформлению
                    </button>
                  </article>
                </div>
              </section>
            </main>
          )}
        </>
      )}

      <Footer className="mt-7" />
    </div>
  );
}

export default Cart;
