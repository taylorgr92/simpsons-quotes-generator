import React from "react";
import ToggleMenu from "./components/ToggleMenu";
import MyFooter from "./components/MyFooter";
import Home from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import {AnimatePresence} from 'framer-motion/dist/framer-motion'

class App extends React.Component {
  render() {
    return (
      <div>
        <ToggleMenu />

        <AnimatePresence>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        </AnimatePresence>

        <MyFooter />
      </div>
    );
  }
}

export default App;
