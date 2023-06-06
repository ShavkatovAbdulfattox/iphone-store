import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import HeaderImg from "./assets/images/header-img.png";

function App() {
  return (
    <AnimatePresence>
      <div className="h-full w-full flex flex-col">
        <Navbar />
        <header className="container bg-gray-950 flex justify-evenly items-center rounded-3xl my-7 shadow-xl">
          <h1 className="text-white text-4xl font-bold">
            Аксессуары для <br /> Iphone 13 Pro Max
          </h1>
          <img src={HeaderImg} alt="iphone-img" className="-mt-10" />
        </header>
        <Main />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
