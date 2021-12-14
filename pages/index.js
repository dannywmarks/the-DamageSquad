import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  return (
    <div className="border-4 mx-auto px-10 pt-8 mb-8 bg-red-500  border-black">
      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
