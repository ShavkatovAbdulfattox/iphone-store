import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";

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
