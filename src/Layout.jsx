import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
