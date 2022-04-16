import React from "react";
import ToggleMenu from "./components/ToggleMenu";
import MyFooter from "./components/MyFooter";
import Home from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import {Route, Routes} from "react-router-dom";
import "./styles.css";
class App extends React.Component {
  render() {
    return (
      <div>
      <ToggleMenu/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="contact" element={ <ContactMe/> } />
      </Routes>
      <MyFooter/>
      </div>
    );
  }
}

export default App;
