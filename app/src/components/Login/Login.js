import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { styled } from "styled-components";
import { motion } from "framer-motion";

function Login({ setIsLogin, isSign, setIsSign }) {
  const signIn = (e) => {
    console.log(e);
  };
  return (
    <WrapperLogin className="flex items-center justify-center">
      {isSign === false ? (
        <motion.form
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="bg-slate-100 flex flex-col max-w-xl min-w-620 p-7 "
          onSubmit={signIn}
        >
          <>
            {" "}
            <div className="flex justify-between items-start">
              <h3 className="text-3xl font-bold text-headingColor mb-10">
                Вход
                {/* Регистрация */}
              </h3>
              <GrClose
                className="text-3xl cursor-pointer "
                onClick={() => setIsLogin(false)}
              />
            </div>
            <label
              htmlFor="Email"
              className="text-textColor font-semibold text-xl mb-5 cursor-pointer"
            >
              E-mail
            </label>
            <input
              type="email"
              id="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your@gmail.com"
              required
            />
            <label
              htmlFor="Password"
              className="text-textColor font-semibold text-xl my-5 cursor-pointer"
            >
              Пароль
            </label>
            <input
              type="password"
              id="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="********"
              required
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
              Войти
            </button>
            <button
              className="border border-blue-500 font-bold py-2 px-4 rounded mt-10 flex"
              onClick={(e) => {
                console.log(e);
              }}
            >
              <FcGoogle className="text-3xl" />
              <span className="text-xl text-headingColor   mx-auto">
                Sign in with Google
              </span>
            </button>
            <div className="flex justify-center items-center mt-5 gap-5">
              <p>Еще нет аккаунта ?</p>
              <a
                href="#!"
                className="text-blue-900"
                onClick={() => setIsSign(true)}
              >
                Зарегитрироваться
              </a>
            </div>
          </>
        </motion.form>
      ) : (
        <motion.form
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="bg-slate-100 flex flex-col max-w-xl min-w-620 p-7 "
          onSubmit={signIn}
        >
          {" "}
          <div className="flex justify-between items-start">
            <h3 className="text-3xl font-bold text-headingColor mb-10">
              Регистрация
            </h3>
            <GrClose
              className="text-3xl cursor-pointer "
              onClick={() => setIsLogin(false)}
            />
          </div>
          <label
            htmlFor="Email"
            className="text-textColor font-semibold text-xl mb-5 cursor-pointer"
          >
            E-mail
          </label>
          <input
            type="email"
            id="Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your@gmail.com"
            required
          />
          <label
            htmlFor="Password"
            className="text-textColor font-semibold text-xl my-5 cursor-pointer"
          >
            Пароль
          </label>
          <input
            type="password"
            id="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            required
          />
          <label
            htmlFor="Password"
            className="text-textColor font-semibold text-xl my-5 cursor-pointer"
          >
            Повторить (пароль)
          </label>
          <input
            type="password"
            id="Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            required
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
            Зарегитрироваться
          </button>
          <button
            className="border border-blue-500 font-bold py-2 px-4 rounded mt-10 flex"
            onClick={(e) => {
              console.log(e);
            }}
          >
            <FcGoogle className="text-3xl" />
            <span className="text-xl text-headingColor   mx-auto">
              Sign in with Google
            </span>
          </button>
          <div className="flex justify-center items-center mt-5 gap-5">
            <p>Есть аккаунт ?</p>
            <a
              href="#!"
              className="text-blue-900"
              onClick={() => setIsSign(false)}
            >
              Вход
            </a>
          </div>
        </motion.form>
      )}
    </WrapperLogin>
  );
}
const WrapperLogin = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.79);
`;

export default Login;
