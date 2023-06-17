import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsCartPlus, BsStarFill } from "react-icons/bs";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";

function Headphones({ data, bigData }) {
  const [dataHeadphones, setDataHeadphones] = useState(data);

  const [{ amountOfLikedCarts }, dispatch] = useStateValue();
  const save = (index) => {
    const updateItems = [...dataHeadphones];
    updateItems[index].favourite = !updateItems[index].favourite;
    setDataHeadphones(updateItems);

    // let amount = 0;

    for (const item of Object.entries(data)) {
      item.map((item) => {
        if (item.favourite) {
          return (amountOfLikedCarts += 1);
        } else {
          return amountOfLikedCarts;
        }
      });
    }

    console.log(amountOfLikedCarts);;

  };

  return (
    <section className="container mt-7 ">
      <h2 className=" text-gray-500 font-bold text-2xl mb-5">Наушники</h2>
      <Cart>
        {dataHeadphones.map(
          ({ name, cost, img, favourite, rate, action }, cartIndex, data) => {
            return (
              <div
                className="flex flex-col justify-center items-center p-5 max-w-sm basis-96 rounded-3xl shadow-lg bg-white hover:bg-primary duration-100 ease-out"
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

                  <motion.div whileTap={{ scale: 0.75 }} className="self-start">
                    <BsCartPlus className="text-3xl cursor-pointer text-cyan-700 fill-slate-900" />
                  </motion.div>
                </div>{" "}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="min-h-[225px] flex items-center justify-center"
                >
                  <img src={img} alt={name} className="object-contain" />
                </motion.div>
                <div className="self-stretch flex justify-between mt-10">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <span>
                    <p className="text-xl text-orange-500 font-extrabold">
                      {cost} $
                    </p>
                    {action && (
                      <p className="text-sm text-orange-300 line-through	 font-extrabold">
                        {action} $
                      </p>
                    )}
                  </span>
                </div>
                <p
                  className={`self-start flex items-center gap-3 ${
                    action ? "mt-3" : "mt-10"
                  } text-gray-900 text-lg`}
                >
                  <BsStarFill className="text-2xl text-orange-300" />
                  {rate}
                </p>
              </div>
            );
          }
        )}
      </Cart>
    </section>
  );
}
const Cart = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Headphones;
