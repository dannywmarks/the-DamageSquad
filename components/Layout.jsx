import React from "react";
import { Header, Navbar } from "./";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
