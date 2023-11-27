import post from "@/app/(admin)/sanity/schemas/post";
import React from "react";
import "../app/globals.css";
import Image from "next/image";
import thumbnailBlog from "../public/image/thumbnail__blog.jpg";
import urlFor from "@/lib/urlFor";
import Link from "next/link";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogData({ posts }: Props) {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-14 mb-14">
      {posts.map((post) => (
        <div>
          <div
            key={post._id}
            className="relative w-[550px] md:w-[600px] h-[510px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] p-[20px]"
          >
            <Image
              className="w-full h-[263px] rounded-[8px]"
              src={urlFor(post.mainImage).url()}
              alt={post.description}
              width={263} // Set the required width
              height={263} // Set the required height
            />
            <h1 className="text-white font-semibold text-2xl mt-5">
              {post.title}
            </h1>
            <p className="text-[rgba(255,_255,_255,_0.80)] font-light mt-5 flex-grow">
              {post.description && post.description.length > 86
                ? `${post.description.slice(0, 86)}...`
                : post.description}
            </p>

            <div className="flex justify-between mt-10 items-center">
              <ClientSideRoute
                key={post._id}
                route={`/post/${post.slug.current}`}
              >
                <button className="text-white px-5 py-[15px] bg-[#1A5349] rounded-[10px] flex gap-[10px] items-center">
                  Read Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </ClientSideRoute>
              <div className="flex gap-2">
                {post.categories.map((category) => (
                  <div
                    key={category._id}
                    className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    <p>{category.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogData;
