import React from "react";
import ToggleMenu from "./components/ToggleMenu";
import MyFooter from "./components/MyFooter";
import Home from "./components/HomePage";
import ContactMe from "./components/ContactMe";
import {Route, Routes} from "react-router-dom";
import "./styles.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";

class App extends React.Component {
  render() {
    return (
      <div>
      <ToggleMenu/>
      <CSSTransition
      timeout={500}
      classNames="fade">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="contact" element={ <ContactMe/> } />
      </Routes>
      </CSSTransition>
      <MyFooter/>
      </div>
    );
  }
}

export default App;
