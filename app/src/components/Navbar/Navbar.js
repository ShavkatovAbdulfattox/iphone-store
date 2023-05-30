import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import { motion } from "framer-motion";
import Select from "../Select/Select";
import Login from "../Login/Login";
import { useStateValue } from "../../context/stateProvider";
import { auth } from "../../config/firebase.config";

function Navbar() {
  const [{ isUserLogged,user }] = useStateValue();
  const [isSign, setIsSign] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  console.log({ isUserLogged });

  return (
    <>
      <motion.nav
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
      >
        <div className="flex items-end gap-10">
          {/* {appleIcon} */}
          <a href="#!" className="text-2xl font-bold uppercase pt-3 ">
            QPICK
          </a>
          <ul className="flex text-textColor text-xl gap-2 ">
            <li>
              <a
                href="#!"
                className="hover:text-black duration-100 ease-in-out font-bold"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-black duration-100 ease-in-out font-bold"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
        {/* {============ Select ===============} */}
        <Select />

        {/* {============ Shopping ===============} */}
        <div className="flex gap-6 text-3xl text-gray-500">
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
          >
            <AiOutlineHeart className="cursor-pointer" />
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
          >
            <AiOutlineShoppingCart className="cursor-pointer" />
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.75,
            }}
            onClick={() => setIsLogin(true)}
          >
            {!isUserLogged ? (
              <BsPersonCircle className="cursor-pointer text-gray-800 shadow-lg" />
            ) : (
              <div>
                <img src={user.photoURL} alt="user-profile" />
              </div>
            )}
          </motion.div>
        </div>
      </motion.nav>
      {
        //  =========== LOGIN ======================
      }
      {!isUserLogged && (
        <Login
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          isSign={isSign}
          setIsSign={setIsSign}
        />
      )}
    </>
  );
}

export default Navbar;
