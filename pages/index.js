import React, {useState} from 'react'
import { Categories, PostCard, PostWidget, Videos, Header, ComicStrip } from "../components";
import { getPosts, getRecentVideos } from "../services";
import { FeaturedPosts, RecentVideos } from "../sections";

import board1 from '../public/week3SalComicFrame1.png'
import board2 from '../public/week3SalComicFrame2.png'
import board3 from '../public/week3SalComicFrame3.png'


export default function Home({ posts, videos }) {

  return (
    <>
    <Header />
    <ComicStrip board1={board1} board2={board2}  board3={board3}/>
      <div className=" redBackground2 border-l-8  border-r-8 mx-auto px-6 md:px-8 pt-8  bg-red-500  border-black">
      <RecentVideos videos={videos} />

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9 col-span-1">
          <div className="lg:grid lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 col-span-1">
          <div className="lg:sticky relative ">
            <PostWidget />
            <Categories />
            {/* <Videos videos={videos}/> */}
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const videos = (await getRecentVideos()) || [];
  return {
    props: { posts, videos },
  };
}
