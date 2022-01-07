import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import bubble from "../public/bubble.png";

// import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg p-0 lg:p-8 pb-12 mb-8 border-8 border-black">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="relative overflow-hidden shadow-xl pb-8 mb-6 sm:m6 lg:border-8 h-96 border-black">
      <img
        src={post.featuredImage.url}
        alt=""
        className="object-top absolute h-96 w-full object-cover  shadow-lg "
      />
    </div>

    <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-red-600 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`} forwardRef>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="50px"
          width="50px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle ml-2 font-medium text-lg">
          {post.author.name}
        </p>
      </div>
      <div className="font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="align-middle">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>
    </div>
    <div className="">
      <div className="bubble flex">
        <div className="flex text-center mt-24 content-center justify-center">
          <p className=" text-lg font-normal px-4  lg:px-20 mb-12">
            {post.excerpt}
          </p>
        </div>
      </div>
    </div>

    <div className="text-center">
      <Link href={`/post/${post.slug}`} forwardRef>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block darkBlueBackground text-lg font-medium rounded-full text-white mt-4 px-8 py-3 cursor-pointer">
          Continue Reading
        </span>
      </Link>
    </div>
  </div>
);

export default PostCard;
