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
