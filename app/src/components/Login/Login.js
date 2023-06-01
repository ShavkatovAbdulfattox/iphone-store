import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../config/firebase.config";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { setUserInformationToLocalStorage } from "../../utils/helper";
import SignUpModal from "../SignUp/SignUp";

function Login({ isLogin, setIsLogin, isSign, setIsSign }) {
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ! USER COLLECTIONFROMDB
  const usersCollectionRef = collection(db, "users");

  const signInWithGoogle = async () => {
    if (user) return;
    try {
      const {
        user: { providerData },
      } = await signInWithPopup(auth, googleProvider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      dispatch({ type: actionType.SET_ISUSERLOGGED, isUserLogged: true });

      //  TODO: Setting user to the localStorage

      setUserInformationToLocalStorage(providerData[0]);

      // TODO: Adding signed user to the USERS DB
      addUserToDB();
    } catch (error) {
      console.log({ error });
      alert("server problem");
    }
  };

  async function addUserToDB() {
    try {
      // ! Cheking if there is any user who is exist so that will not add same user to the DB
      const isUserExist = checkUserExisting();
      if (isUserExist) return;
      await addDoc(usersCollectionRef, {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
        photoUrl: auth?.currentUser?.photoURL,
        userId: auth?.currentUser?.uid,
      });
    } catch (error) {
      console.log({ error });
    }
  }

  async function checkUserExisting() {
    // ! Getting all of the signed users from the DB
    const data = await getDocs(usersCollectionRef);

    const isUserExisting = data.docs
      .map((doc) => doc.data())
      // TODO : removing the empty object
      .filter((users) => Object.keys(users).length !== 0)
      // TODO : checking for if the user is existing in the DB
      .some((user) => user?.email === auth?.currentUser?.email);

    return isUserExisting;
  }

  return (
    <>
      {isLogin && (
        <WrapperLogin className="flex items-center justify-center">
          {isSign === false ? (
            <motion.form
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="bg-slate-100 flex flex-col max-w-xl min-w-620 p-7 "
            >
              <>
                {" "}
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold text-headingColor mb-10">
                    Вход
                  </h3>
                  <GrClose
                    className="text-3xl cursor-pointer "
                    onClick={() => setIsLogin(false)}
                  />
                </div>
                <label
                  htmlFor="Sign-Email"
                  className="text-textColor font-semibold text-xl mb-5 cursor-pointer"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="Sign-Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  htmlFor="Sign-Password"
                  className="text-textColor font-semibold text-xl my-5 cursor-pointer"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  id="Sign-Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                  Войти
                </button>
                <button
                  className="border border-blue-500 font-bold py-2 px-4 rounded mt-10 flex"
                  onClick={signInWithGoogle}
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
            <SignUpModal setIsLogin={setIsLogin} setIsSign={setIsSign} />
          )}
        </WrapperLogin>
      )}
    </>
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
