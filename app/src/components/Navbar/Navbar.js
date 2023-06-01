import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

import { motion } from "framer-motion";
import Select from "../Select/Select";
import Login from "../Login/Login";
import { useStateValue } from "../../context/stateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { actionType } from "../../context/reducer";

function Navbar() {
  const [{ isUserLogged, user }, dispatch] = useStateValue();
  const [isSign, setIsSign] = useState(false);
  const [isLogin, setIsLogin] = useState(false);


  const logOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      dispatch({
        type: actionType.SET_USER,
        user: null,
      });
      dispatch({
        type: actionType.SET_ISUSERLOGGED,
        isUserLogged: false,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <motion.nav
        className="flex items-end justify-between"
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
        <div className="flex items-center gap-6 text-3xl text-gray-500">
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

          <div>
            {!isUserLogged ? (
              <motion.div
                whileTap={{
                  scale: 0.8,
                }}
                onClick={() => setIsLogin(true)}
              >
                <BsPersonCircle className="cursor-pointer text-gray-800 shadow-lg" />
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={user?.photoURL}
                    alt="user-profile"
                    className="w-9 h-9 rounded-full cursor-pointer"
                  />
                  <motion.div
                    whileTap={{
                      scale: 0.8,
                    }}
                    className="cursor-pointer"
                    onClick={logOut}
                  >
                    <button className="text-xl bg-gray-300 px-3 py-1 rounded-sm flex items-center gap-2">
                      <BiLogOut />
                      Logout
                    </button>
                  </motion.div>
                </div>
              </>
            )}
          </div>
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
