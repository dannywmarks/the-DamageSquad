import React from "react";
import { Header, Navbar, Substack, Footer, ComicStrip } from "./";
import Image from "next/image";
import GFLogo from "../public/graciefighter.jpg";
import board1 from '../public/salComic1board1.png'
import board2 from '../public/SalComic1StoryBoard3.png'
import board3 from '../public/salComic1Board3 copy.png'
import Head from 'next/head'


const Layout = ({ children }) => {
  return (
    <>
  
  
      <Navbar />
  
      <Header />
      <ComicStrip board1={board1} board2={board2}  board3={board3}/>
      {children}
      <Substack />
      <Footer />
    </>
  );
};

export default Layout;
