// styles
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import Home from "./pages/Home";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

