import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Components|Navbar/Navbar"
};

export const navbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
