"use client";

import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { RichTextComponents } from "@/components/RichTextComponents";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

async function Post({ params: { slug } }: Props) {
  const handleClick = () => {
    alert("you click me!");
  };
  const query = groq`
*[_type == 'post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->,
  }
`;

  const post: Post = await client.fetch(query, { slug });
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      {/* <nav>
        <div className="flex items-center mb-[50px] md:mb-[83px]">
          <button onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-[35px] h-[35px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </nav> */}

      <header className="rounded-[10px] px-4 md:px-[50px] py-4 md:py-[32px] w-full h-fit md:h-[313px] bg-[rgba(217,_217,_217,_0.05)] text-white mb-4 md:mb-[50px]">
        <h1 className="text-lg md:text-[40px] font-bold mb-5 md:mb-[100px]">
          {post.title}
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-5 md:mb-0 flex items-center">
            <Image
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              className="rounded-full w-[50px] h-[50px] mr-[24px]"
              height={20}
              width={20}
            />

            <div className="mr-5 md:mr-[45px]">
              <h4 className="text-sm md:text-base">Author</h4>
              <p className="text-sm md:text-base">{post.author.name}</p>
            </div>

            <div>
              <h4 className="text-sm md:text-base">Last Updated</h4>
              <p className="text-sm md:text-base">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <p className="font-semibold text-md md:text-[36px] text-white">
            {post.categories.map((category) => (
              <span className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold mr-2">
                {category.title}
              </span>
            ))}
          </p>
        </div>
      </header>
      <div className="px-4 md:px-[50px]">
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </>
  );
}

export default Post;
