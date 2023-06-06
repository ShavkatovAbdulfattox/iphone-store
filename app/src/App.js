import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <AnimatePresence>
      <div className="h-full w-full flex flex-col">
        <Navbar />
        <header className="container">

        </header>
        <Main />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
