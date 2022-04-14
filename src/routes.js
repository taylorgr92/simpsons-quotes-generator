import React from "react";
import { Routes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
};

export default Routes;
