import React, {useState} from 'react'
import { Categories, PostCard, PostWidget, Videos } from "../components";
import { getPosts, getRecentVideos } from "../services";
import { FeaturedPosts, RecentVideos } from "../sections";


export default function Home({ posts, videos }) {

  return (
    <div className=" redBackground2 border-l-8  border-r-8 mx-auto px-8 pt-8  bg-red-500  border-black">
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
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const videos = (await getRecentVideos()) || [];
  return {
    props: { posts, videos },
  };
}
