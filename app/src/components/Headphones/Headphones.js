import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsCartPlus, BsFillCartCheckFill, BsStarFill } from "react-icons/bs";
// import { useStateValue } from "../../context/stateProvider";
// import { actionType } from "../../context/reducer";
import { toast } from "react-toastify";

function Headphones({ data, category, setAmoutOfSaved, setAddToCart }) {
  const [dataIphone, setDataIphone] = useState([]);
  useEffect(() => {
    setDataIphone(data.filter((item) => item.name === category));
  }, [data, category]);

  const save = (index) => {
    const updateItems = [...dataIphone];
    updateItems[index].favourite = !updateItems[index].favourite;
    if (updateItems[index].favourite) {
      toast.success("Добавлено в избранное", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    }

    setDataIphone(updateItems);
  };

  const addToCart = (index, cart) => {
    if (cart) return;
    const updateItems = [...dataIphone];
    updateItems[index].amount += 1;
    updateItems[index].cart = true;
    toast.success("Добавлено в корзину", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
    setDataIphone(updateItems);
  };

  useEffect(() => {
    const amountLiked = dataIphone.reduce((acc, cur) => {
      if (cur.favourite === true) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
    setAmoutOfSaved(amountLiked);
  }, [dataIphone, setAmoutOfSaved]);

  useEffect(() => {
    const addedCart = data.filter((item) => {
      return item.cart === true;
    });
    setAddToCart(addedCart);
  }, [data ,dataIphone, setAddToCart]);

  return (
    <section className="container mt-7 ">
      <h2 className=" text-gray-500 font-bold text-2xl mb-5 uppercase">
        {category}
      </h2>
      <Cart>
        {dataIphone.map(({ name, cost, img, favourite, cart }, cartIndex) => {
          return (
            <div
              className="flex flex-col justify-center items-center p-5 min-h-[450px] max-h-[500px] max-w-sm min-w-[384px]   rounded-3xl shadow-lg bg-white "
              key={cartIndex}
            >
              <div className="self-stretch flex justify-between">
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="self-start"
                  onClick={() => save(cartIndex)}
                >
                  {favourite ? (
                    <AiFillHeart className="text-3xl cursor-pointer text-cyan-700 fill-slate-900" />
                  ) : (
                    <AiOutlineHeart className="text-3xl cursor-pointer text-cyan-700 fill-slate-900" />
                  )}
                </motion.div>

                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="self-start"
                  onClick={() => addToCart(cartIndex, cart)}
                >
                  {cart ? (
                    <BsFillCartCheckFill className="text-3xl cursor-pointer text-cyan-700 fill-slate-900" />
                  ) : (
                    <BsCartPlus className="text-3xl cursor-pointer text-cyan-700 fill-slate-900" />
                  )}
                </motion.div>
              </div>{" "}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="min-h-[225px] w-full flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={name}
                  className="object-contain h-[90%] w-[100%]"
                />
              </motion.div>
              <div className="self-stretch flex justify-between mt-10">
                <h3 className="font-bold text-lg">{name}</h3>
                <span>
                  <p className="text-xl text-orange-500 font-extrabold">
                    {cost}
                  </p>
                  {/* {action && (
                      <p className="text-sm text-orange-300 line-through	 font-extrabold">
                        {action} $
                      </p>
                    )} */}
                </span>
              </div>
              <p className={`self-start flex items-center gap-3 mt-8`}>
                <BsStarFill className="text-2xl text-orange-300" />
                4.8
              </p>
            </div>
          );
        })}
      </Cart>
    </section>
  );
}
const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  padding-bottom: 1rem;
  gap: 2rem;
`;

export default Headphones;
