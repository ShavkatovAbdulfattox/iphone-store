import { getApp, getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {

  getFirestore,

} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZs24ElGdFCtJNB44z3xT4FyQnkbrDAkg",
  authDomain: "iphone-store-test.firebaseapp.com",
  projectId: "iphone-store-test",
  storageBucket: "iphone-store-test.appspot.com",
  messagingSenderId: "378095978736",
  appId: "1:378095978736:web:d8ca35fc5dccb2076f1a35",
  measurementId: "G-43795SD6DG",
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
// export const app =
//   getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
//  Auth

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);

// Database
console.log(auth.currentUser);
export const db = getFirestore(app);

