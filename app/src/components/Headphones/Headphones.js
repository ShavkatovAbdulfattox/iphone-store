import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsCartPlus, BsFillCartCheckFill, BsStarFill } from "react-icons/bs";
// import { useStateValue } from "../../context/stateProvider";
// import { actionType } from "../../context/reducer";
import { toast } from "react-toastify";

function Headphones({
  data,
  category,
  setAmoutOfSaved,
  setAddToCart,
  setAddToSaved,
}) {
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
    const updatedItems = [...dataIphone];
    updatedItems[index].amount = 1;
    updatedItems[index].cart = true;
    toast.success("Добавлено в корзину", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
    setDataIphone(updatedItems);
    
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

  //  ! adding data if to the cart if the cart is true
  useEffect(() => {
    const addedCart = data.filter((item) => {
      return item.cart === true;
    });
    setAddToCart(addedCart);
  }, [data, dataIphone, setAddToCart]);

  useEffect(() => {
    const addedCart = data.filter((item) => {
      return item.favourite === true;
    });
    setAddToSaved(addedCart);
  }, [data, dataIphone, setAddToSaved]);

  return (
    <section className="container mt-7 ">
      <h2 className=" text-gray-500 font-bold md:text-2xl text-lg mb-5 uppercase md:text-left text-center">
        {category} {data[0].category}
      </h2>
      <Cart className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center md:gap-20 gap-5">
        {dataIphone.map(({ name, cost, img, favourite, cart }, cartIndex) => {
          return (
            <div
              className="flex flex-col justify-center items-center p-5 min-h-[450px] max-h-[500px] md:max-w-sm lg:min-w-[400px] min-w-[320px] w-[80%] rounded-3xl shadow-lg bg-white "
              key={cartIndex}
            >
              <div className="self-stretch flex justify-between ">
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
                className="min-h-[225px] h-60 w-full flex items-center justify-center rounded-lg"
              >
                <img
                  src={img}
                  alt={name}
                  className="object-contain h-[90%] rounded-lg  shadow-xl"
                />
              </motion.div>
              <div className="lg:self-stretch lg:flex lg:flex-row lg:justify-between flex flex-col justify-center items-center mt-10">
                <h3 className="font-bold md:text-xl text-lg  ">{name}</h3>
                <span>
                  <p className="md:text-xl sm:text-lg text-md text-orange-500 font-extrabold font-mono">
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
  /* display: grid;
  grid-template-columns: repeat(3,1fr);
  place-items: center;
  flex-wrap: wrap;
 */ 
  /* padding-bottom: 1rem;  */
`;

export default Headphones;
