import React from "react";
import { Header, Navbar, Substack, Footer, ComicStrip } from "./";

import board1 from '../public/week1SalComicFrame1.png'
import board2 from '../public/week1SalComicFrame2.png'
import board3 from '../public/week1SalComicFrame3.png'



const Layout = ({ children }) => {
  return (
    <>
  
  
      <Navbar />
  
      {/* <Header /> */}
      {/* <ComicStrip board1={board1} board2={board2}  board3={board3}/> */}
      {children}
      <Substack />
      <Footer />
    </>
  );
};

export default Layout;
