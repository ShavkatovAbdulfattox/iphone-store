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

  return (
    <main>
      {saved.length <= 0 ? (
        <h1 className="md:text-4xl text-2xl text-center text-white p-10 flex justify-center rounded-lg shadow-lg bg-orange-300 uppercase mt-16">
          There is no such as Saved cart
        </h1>
      ) : (
        <section className="container mt-7 ">
          <h2 className=" text-gray-500 font-bold text-2xl mb-5 uppercase">
            {category}
          </h2>
          <Cart className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center md:gap-20 gap-5">
            {saved.map(({ name, cost, img, favourite, cart }, cartIndex) => {
              return (
                <div
                  className="flex flex-col justify-center items-center p-5 min-h-[450px] max-h-[500px] md:max-w-sm lg:min-w-[384px] min-w-[320px] w-[80%]   rounded-3xl shadow-lg bg-white "
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
                    className="min-h-[225px] h-60 w-full flex items-center justify-center rounded-lg"
                  >
                    <img
                      src={img}
                      alt={name}
                      className="object-contain h-[90%] rounded-lg  shadow-xl"
                    />
                  </motion.div>
                  <div className="lg:self-stretch lg:flex lg:flex-row lg:justify-between flex flex-col justify-center items-center mt-10">
                    <h3 className="font-bold md:text-lg  ">{name}</h3>
                    <span>
                    <p className="md:text-xl sm:text-lg text-md text-orange-500 font-mono font-extrabold">
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
      )}
    </main>
  );
}
const Cart = styled.div`
  padding-bottom: 1rem;
  gap: 2rem;
`;
export default Saved;
