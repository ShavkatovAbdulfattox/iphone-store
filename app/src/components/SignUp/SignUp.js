import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
// import { signUpWithGooglePopup } from "../../utils/firebaseSingUp";
import { setUserInformationToLocalStorage } from "../../utils/helper";
import { signUpWithEmail } from "../../utils/firebaseSingUp";
import { signUpWithGooglePopup } from "../../utils/firebaseSignIn";

function SignUpModal({ setIsLogin, setIsSign }) {
  const [{ user }, dispatch] = useStateValue();
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [nameUp, setNameUp] = useState("");
  // const [res,setRes] = useState(false)

  // ! USER COLLECTIONFROMDB
  const signUpWithGoogle = () => {
    signUpWithGooglePopup();
    // Listen for authentication state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { providerData } = user;
        dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
        });
        dispatch({ type: actionType.SET_ISUSERLOGGED, isUserLogged: true });
        setUserInformationToLocalStorage(providerData[0]);
        // Perform actions for the signed-in user
      } else {
        // User is signed out
        console.log("No user is signed in.");

        // Perform actions for signed-out state
      }
    });
  };
  const signUpWithEmailAndPassword = async (e) => {
    try {
      signUpWithEmail(emailUp, passwordUp, nameUp);

      const { displayName, email, uid } = auth?.currentUser;
      const userInfo = [{ uid, displayName, email }];
      // console.log(auth?.currentUser);

      dispatch({
        type: actionType.SET_USER,
        user: userInfo,
      });
      dispatch({ type: actionType.SET_ISUSERLOGGED, isUserLogged: true });

      //  TODO: Setting user to the localStorage

      setUserInformationToLocalStorage(userInfo);
      // setRes(true)
      setEmailUp("");
      setPasswordUp("");
      setNameUp("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="bg-slate-100 flex flex-col max-w-xl min-w-620 p-7 "
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
        htmlFor="Name"
        className="text-textColor font-semibold text-xl mb-5 cursor-pointer"
      >
        Name
      </label>
      <input
        type="text"
        id="Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Islom"
        value={nameUp}
        onChange={(e) => setNameUp(e.target.value)}
        required
      />
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
        value={emailUp}
        onChange={(e) => setEmailUp(e.target.value)}
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
        value={passwordUp}
        onChange={(e) => setPasswordUp(e.target.value)}
        required
      />
      {/* <label
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
  /> */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        onClick={signUpWithEmailAndPassword}
      >
        Зарегитрироваться
      </button>
      <button
        className="border border-blue-500 font-bold py-2 px-4 rounded mt-10 flex"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <FcGoogle className="text-3xl" />
        <span
          className="text-xl text-headingColor   mx-auto"
          onClick={signUpWithGoogle}
        >
          Sign up with Google
        </span>
      </button>
      <div className="flex justify-center items-center mt-5 gap-5">
        <p>Есть аккаунт ?</p>
        <a href="#!" className="text-blue-900" onClick={() => setIsSign(false)}>
          Вход
        </a>
      </div>
    </motion.form>
  );
}

export default SignUpModal;
