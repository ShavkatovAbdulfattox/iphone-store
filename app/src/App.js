import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import "./utils/firebaseFunctions";
import { useState } from "react";
import { auth } from "./config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {

  return (
    <AnimatePresence>
      <div className="container">
        <Navbar />
      </div>
    </AnimatePresence>
  );
}

export default App;
