import React from "react";
import Image from "next/image";
import SalvatoreJJ from "../../public/sJJ.png";
import UkeVsTori from '../../public/judoUKEmk.jpg'

const comics = () => {
  return (
    <div class="p-5 border-black border-l-8 border-r-8 bg-red-500">
      <div className="grid md:grid-cols-2 gap-6" style={{ fontSize: 0 }}>
        <div className="border-4 border-black">
          <Image src={SalvatoreJJ} height="1000" width="1000px" />
        </div>
        <div className="border-4 border-black ">
          <Image src={UkeVsTori} height="1000" width="1000px" />
        </div>
      </div>
    </div>
  );
};

export default comics;
