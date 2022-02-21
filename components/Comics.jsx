import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Comics = ({}) => {


 
  return (
    <div className="bg-white shadow-xl border-8 border-black p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">RECENT COMICS</h3>
   
    </div>
  );
};

export default Comics;
