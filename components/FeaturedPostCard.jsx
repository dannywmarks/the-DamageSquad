import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// F2A541 yellow orange hex

const FeaturedPostCard = ({ post }) => (
  <div className="border-black relative h-72">
    <div
      className="absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 border-black border-4"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-white w-full h-72 border-4 border-black" />
    <div className="flex flex-col  p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
        {post.title}
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-black text-shadow ml-2 font-medium">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`} forwardRef>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
