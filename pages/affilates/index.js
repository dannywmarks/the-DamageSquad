import React from 'react'
import Image from "next/image";
import elnino from "../../public/elnino.jpg"
import ajj from "../../public/ajj.png";
import db from "../../public/db.png";

const affiliates = () => {
  return (
    <div className="bg-grey p-5 border-black border-l-8 border-r-8 h-full">
    <div className="grid md:grid-cols-3 gap-4 " style={{ fontSize: 0 }}>
      <div className="border-black border-4">
        <Image src={elnino} height="500px" width="800px" />
      </div>
      <div className="border-black border-4 ">
        <Image src={ajj} height="500px" width="800px" />
      </div>
      <div className="border-black border-4 ">
        <Image src={db} height="500px" width="800px" />
      </div>
    </div>
  </div>
  )
}

export default affiliates
