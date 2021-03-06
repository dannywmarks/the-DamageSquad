import React from "react";

const Substack = () => {
  return (
    <div className="mx-autopx-10 border-l-8 border-r-8 border-black">
      {/* <Image src={gfSkull} height="240px" width="300px" /> */}

      <div className="flex justify-center items-center align-center subStackbg border-t-8 border-b-8"></div>
      <h1 className="text-center text-white smYellow text-2xl p-8 darkBlueBackground ">
        Subscribe to Danny Damage's School of Hard Knocks
      </h1>

      <div className="darkBlueBackground">
        <div className=" w-full h-full lg:px-20 md:px-20 flex-no-wrap ">
          <iframe
            className="w-full p-1 "
            src="https://frame.stackblocks.app/ckxxikm19001511maj26mz7zh"
            width="800"
            height="525"
            frameBorder="0"
            scrolling="no"
            style={{ backgroundColor: "#2570C0", font: "animeace2", display: "flex" ,flexWrap: "no-wrap"}}
          ></iframe>
        </div>
        <div className="flex items-center justify-content align-center darkBlueBackground w-full">
          <iframe
            className="w-full"
            src="https://thedamagesquad.substack.com/embed"
            width="500"
            height="420"
            frameBorder="0"
            scrolling="no"
            style={{ backgroundColor: "#2570C0" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Substack;
