import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error from "./components/Error";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <div className="h-full w-full flex flex-col">
          <Routes>
            <Route element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
