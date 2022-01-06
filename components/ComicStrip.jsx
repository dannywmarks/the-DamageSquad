import React from "react";
import Image from "next/image";

const ComicStrip = ({ board1, board2, board3 }) => {
  return (
    <div className="grid lg:grid-cols-3 bg-black border-black gap-2 border-l-8 border-r-8 border-t-4">
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
