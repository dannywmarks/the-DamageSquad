import React from "react";
import Image from "next/image";

const ComicStrip = ({ board1, board2, board3 }) => {
  return (
    <div className="grid lg:grid-cols-3  border-black md:gap-1 bg-black border-l-8 border-r-8 ">
      <div className="">
        <div className="">
    
          <Image src={board1} />
        </div>
      </div>
      <div className="">
        
        <div className="">
          <Image src={board2} />
        </div>
      </div>
      <div className="">
        
        <div className="">
          <Image src={board3} />
        </div>
      </div>
    </div>
  );
};

export default ComicStrip;
