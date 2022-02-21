import React from "react";
import Image from "next/image";
import board1 from "../../public/week1SalComicFrame1.png";
import board2 from "../../public/week1SalComicFrame2.png";
import board3 from "../../public/week1SalComicFrame3.png";
import board4 from "../../public/week2SalComicFrame1.png";
import board5 from "../../public/week2SalComicFrame2.png";
import board6 from "../../public/week2SalComicFrame3b.png";
import board7 from "../../public/week3SalComicFrame1.png";
import board8 from "../../public/week3SalComicFrame2.png";
import board9 from "../../public/week3SalComicFrame3.png";
import board10 from "../../public/week4SalComicFrame1.jpg"
import board11 from "../../public/week4SalComicFrame2.png"
import board12 from "../../public/week4SalComicFrame3.png"
import board13 from "../../public/week5SalComicFrame1.png"
import board14 from "../../public/week5SalComicFrame2.png"
import board15 from "../../public/week5SalComicFrame3.png"

const comic = () => {
  return (
    <div className="bg-grey p-5 border-black border-l-8 border-r-8 h-full">
      <div className="grid md:grid-cols-3 gap-4 " style={{ fontSize: 0 }}>
        <div className="border-black border-4">
          <Image src={board1} height="500px" width="800px" />
        </div>
        <div className="border-black border-4 ">
          <Image src={board2} height="500px" width="800px" />
        </div>
        <div className="border-black border-4 ">
          <Image src={board3} height="500px" width="800px" />
        </div>
        <div className="border-black border-4 ">
          <Image src={board4} height="500px" width="800px" />
        </div>
        <div className="border-black border-4 ">
          <Image src={board5} height="500px" width="800px" />
        </div>
        <div className="border-black border-4 ">
          <Image src={board6} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
          <Image src={board7} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
          <Image src={board8} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
          <Image src={board9} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
        <Image src={board10} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
        <Image src={board11} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
        <Image src={board12} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
        <Image src={board13} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
        <Image src={board14} height="500px" width="800px" />
        </div>
        <div className="bg-white border-4 border-black">
        <Image src={board15} height="500px" width="800px" />
        </div>
      </div>
    </div>
  );
};

export default comic;
