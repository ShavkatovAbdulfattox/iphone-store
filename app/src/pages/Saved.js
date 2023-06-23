import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsCartPlus, BsFillCartCheckFill, BsStarFill } from "react-icons/bs";
// import { actionType } from "../../context/reducer";
import { toast } from "react-toastify";
import { useStateValue } from "../context/stateProvider";

function Saved() {
  const [{ saved, category }] = useStateValue();

  console.log(saved);
  return (
    <main>
      {saved.length <= 0 ? (
        <h1 className="text-4xl text-white p-5 flex justify-center rounded-lg shadow-lg bg-orange-300 uppercase">
          There is no such as Saved cart
        </h1>
      ) : (
        <section className="container mt-7 ">
          <h2 className=" text-gray-500 font-bold text-2xl mb-5 uppercase">
            {category}
          </h2>
          <Cart>
            {saved.map(
              ({ name, cost, img, favourite, cart }, cartIndex) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center p-5 min-h-[450px] max-h-[500px] max-w-sm min-w-[384px]   rounded-3xl shadow-lg bg-white "
                    key={cartIndex}
                  >
                    <div className="self-stretch flex justify-between">
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="self-start"
                        // onClick={() => save(cartIndex)}
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
                        // onClick={() => addToCart(cartIndex, cart)}
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
              }
            )}
          </Cart>
        </section>
      )}
    </main>
  );
}
const Cart = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 1rem;
  gap: 2rem;
`;
export default Saved;
