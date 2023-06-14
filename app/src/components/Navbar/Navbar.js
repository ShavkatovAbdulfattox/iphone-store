import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/stateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { actionType } from "../../context/reducer";
import { Outlet, Link } from "react-router-dom";

import Select from "../Select/Select";
import Login from "../Login/Login";
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

  const userPhoto = user?.photoURL
    ? user?.photoURL
    : "https://cdn.onlinewebfonts.com/svg/img_258083.png";

  return (
    <div className="container">
      <motion.nav
        className="flex items-end justify-between"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
      >
        <div className="flex items-end gap-10">
          {/* {appleIcon} */}
          <Link to="/" className="text-2xl font-bold uppercase pt-3 ">
            QPICK
          </Link>
          <ul className="flex text-textColor text-xl gap-3 ">
            <li>
              <Link
                to="/"
                className="hover:text-black duration-100 ease-in-out font-bold"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to={"/service"}
                className="hover:text-black duration-100 ease-in-out font-bold"
              >
                Условия
              </Link>
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
            className="relative"
          >
            <Link to={"/saved"}>
              <AiOutlineHeart className="cursor-pointer" />
            </Link>
            <span className="absolute block  bg-orange-500 rounded-[100%] text-white font-extrabold text-[12px]  -top-1 -right-2 px-[6px] drop-shadow-sm">9</span>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.8,
            }}
          >
            <Link to="/cart">
              <AiOutlineShoppingCart className="cursor-pointer" />
            </Link>
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
                    src={userPhoto}
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

      <Outlet />
    </div>
  );
}

export default Navbar;
