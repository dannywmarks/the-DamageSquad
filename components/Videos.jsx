import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Videos = ({videos}) => {

  const recentVideos = videos.filter(video => video.id.videoId)

 
  return (
    <div className="bg-white shadow-xl border-8 border-black p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">RECENT VIDEOS</h3>
      {recentVideos.map((video) => (
        console.log('from recent videos', video)
        // <Link key={category.slug} href={``}>
        //   <span className="cursor-pointer block pb-3 mb-3">
        //     {category.name}
        //   </span>
        // </Link>
      ))}
    </div>
  );
};

export default Videos;