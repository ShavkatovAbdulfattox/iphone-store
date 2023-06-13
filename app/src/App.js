import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import Saved from "./pages/Saved";
import Service from "./components/Service/Service";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="saved" element={<Saved />} />
              <Route path="service" element={<Service />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
