// styles
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

