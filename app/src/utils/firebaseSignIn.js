import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase.config";

// ! Javascript framework https://sweetalert2.github.io/
import Swal from "sweetalert2";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

// Function to check if a user exists in Firestore

async function checkUserLoginExists(email, password) {
  const usersCollectionRef = collection(db, "users");
  const q = query(
    usersCollectionRef,
    where("email", "==", email),
    where("password", "==", password)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    const userData = doc.data();
    return {
      exists: true,
      email: userData.email,
    };
  } else {
    return {
      exists: false,
      email: null,
    };
  }
}

// Function to sign up with email and password
export async function loginInToAcc(email, password) {
  // Check if the user already exists in Firestore
  const userExists = await checkUserLoginExists(email, password);
  if (userExists.exists) {
    Swal.fire({
      icon: "success",
      title: "Регистрация",
      text: "Вы вошли успешно в аккаунт!",
    });
    return userExists.email
  } else {
    Swal.fire({
      icon: "error",
      title: "Регистрация",
      text: "Пожалуйста пройдите регестрацию сначала!",
    });
  }
  try {
    Swal.fire({
      icon: "error",
      title: "Регистрация",
      text: "Пожалуйста пройдите регестрацию сначала!",
    });
  } catch (error) {
    console.log("Error signing up:", error);
    Swal.fire({
      icon: "error",
      title: "Регистрация",
      text: "Ошика при Регистрации, обновите страницу и повторите!",
    });
  }
}

// ! =========== Google SignIn check
// Function to check if a user exists in Firestore
async function checkUserExists(uid) {
  const userDocRef = doc(db, "users", uid);
  const userDocSnapshot = await getDoc(userDocRef);
  return userDocSnapshot.exists();
}

// // Function to sign up with Google Popup
export function signUpWithGooglePopup() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const { uid, displayName, email, photoURL } = user;

      // Check if the user already exists in Firestore
      const userExists = await checkUserExists(uid);

      if (userExists) {
        Swal.fire({
          icon: "success",
          title: "Registered",
          text: "You are signed up to your account!",
        });
        // Perform your existing user logic here
      } else {
        // User does not exist, proceed with sign up
        const newUser = {
          uid: uid,
          displayName: displayName,
          email: email,
          photoUrl: photoURL,
          googleAuth: true,
          // Add any additional user data as needed
        };
        // Save the user data to Firestore
        const userDocRef = doc(db, "users", uid);
        // ! Setting new user to the firestore
        await setDoc(userDocRef, newUser);

        // TODO: Showing alert that was successful
        Swal.fire({
          icon: "success",
          title: "Регестрация прошло успешно !",
          showConfirmButton: false,
          timer: 2500,
        });
        // Perform your new user logic here
        return newUser;
      }
    })
    .catch((error) => {
      console.log("Error signing up with Google:", error);
      // TODO: Showing alert that was an error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
}
