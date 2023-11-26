import React from "react";
import { useState, useEffect } from "react";
import "../app/globals.css";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import thumbnail from "../public/image/thumbnail__blog.jpg";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/lib/client";
import ClientSideRoute from "@/components/ClientSideRoute";

const query = groq`
*[_type == 'post'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;

export const revalidate = 0;

type Props = {
  posts: Post[];
};

function BlogData({ posts }: Props) {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-14 mb-14">
      {posts.map((post) => (
        <div>
          <div className="relative w-[550px] md:w-[600px] h-[510px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] p-[20px]">
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
                  <div className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
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

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data asynchronously
    (async () => {
      const fetchedPosts = await client.fetch(query, { next: { revalidate } }); // Assuming client is available
      setPosts(fetchedPosts);
      console.log(fetchedPosts);
    })();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <nav className="px-5 flex items-center h-20 mb-5">
        <div>
          <Link href="/blog">
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
          </Link>
        </div>
      </nav>
      <BlogData posts={posts} />
    </>
  );
}

export default BlogList;
