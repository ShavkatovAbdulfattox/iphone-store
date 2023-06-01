import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase.config";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";

// Function to check if a user exists in Firestore
export async function checkUserExists(email) {
  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Returns true if the query has any matching documents
}

// Function to sign up with email and password
export async function signUpWithEmail(email, password, nameUp) {
  // Check if the user already exists in Firestore
  const userExists = await checkUserExists(email);

  if (userExists) {
    console.log(
      "User already exists. Try with another email or login with this one."
    );
    // showing an error message to the user
    Swal.fire({
      icon: "error",
      title: "Регистрация",
      text: "Извените аккаунт уже существует !",
    });
    return;
  }

  // User does not exist, proceed with sign up
  try {
    // Use the Firebase Authentication API to create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Save additional user data to Firestore
    const newUser = {
      uid: user.uid,
      email: user.email,
      nameUp,
      // Add any additional user data as needed
    };

    const userDocRef = doc(db, "users", user.uid);
    await setDoc(userDocRef, newUser);
    Swal.fire({
      icon: "success",
      title: "Регистрация",
      text: "Успешно прошли !",
    });
  } catch (error) {
    console.log("Error signing up:", error);
    Swal.fire({
      icon: "error",
      title: "Регистрация",
      text: "Ошика при Регистрации !",
    });
  }
}
