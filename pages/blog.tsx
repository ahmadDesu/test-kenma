import BlogList from "@/components/BlogData";
import Header from "@/components/Header";
import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import BlogData from "@/components/BlogData";
import Navbar from "@/components/Navbar";
import AlertButton from "@/app/(user)/html/[slug]/page";

const query = groq`
*[_type == 'post'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc) [0...4]
`;

export const revalidate = 0;

function blog() {
  const [posts, setPosts] = useState([]);

  const handleClick = () => {
    alert("you click me!");
  };

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
      <Header />
      <section>
        {/* <!-- Property --> */}
        <div className="rounded-full w-[400px] h-[400px] bg-[rgba(217,_217,_217,_0.20)] absolute left-[-200px] top-[-180px]"></div>
      </section>

      <div className="absolute top-0 w-full z-0">
        <section>
          {/* <!-- Hero Section --> */}
          <div className="w-full h-[400px] bg-[rgba(217,_217,_217,_0.05)] relative top-0 flex items-center justify-center">
            <div className="w-[550px] md:w-[798px]">
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center font-primary">
                Help You to Understand
                <span className="text-[#00C7A3]">Every Case</span> That We Use
              </h1>
              <p className="mt-7 text-center text-white text-xl">
                Give you more resource for learning coding and you can make
                better and faster your own business with our high quality
                template
              </p>
            </div>
          </div>
        </section>

        <section>
          {/* <!-- quote --> */}
          <p className="text-center text-white relative mt-2 text-md">
            Read More to Knew More
          </p>
        </section>

        <section className="flex flex-wrap gap-6 justify-center mt-14 mb-14">
          <BlogData posts={posts} />
        </section>

        <section>
          <div className="flex justify-center">
            <Link href="/bloglist">
              <button className="text-white px-5 py-[15px] bg-[#1A5349] rounded-[10px] flex gap-[10px] items-center">
                Show More
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
            </Link>
          </div>
        </section>

        <section>
          <div className="flex justify-center mt-14 md:mt-[200px]">
            <p className="text-white text-2xl font-semibold">
              #Make<span className="text-[#0DCFAC]">Easier</span>
            </p>
          </div>
        </section>

        <footer className="w-full h-fit flex flex-col justify-center bg-[rgba(82,82,82,.80)] p-5 md:px-[60px] mt-14 md:mt-[230px]">
          <div className="flex justify-between flex-wrap">
            <div className="md:w-[290px] flex md:block gap-3 mb-5">
              <img
                src="../img/course_icon.svg"
                alt="course icon"
                className="md:mb-[28px]"
              />
              <div className="">
                <h1 className="font-semibold text-[#ADADAD] text-[18px] md:mb-[22px]">
                  Free Course
                </h1>
                <p className="font-light text-white text-sm md:text[16px]">
                  Belajar Banyak Bahasa Pemrograman Dengan Gratis.
                </p>
              </div>
            </div>
            <div className="md:w-[290px] flex md:block gap-3 mb-5">
              <img
                src="../img/template_icon.svg"
                alt="template icon"
                className="mb-[28px]"
              />
              <div>
                <h1 className="font-semibold text-[#ADADAD] text-[18px] md:mb-[22px]">
                  Build Easily With Template
                </h1>
                <p className="font-light text-white text-sm md:text-[16px]">
                  Membuat website menjadi semakin mudah dengan template yang
                  siap pakai.
                </p>
              </div>
            </div>
            <div className="md:w-[290px] flex md:block gap-3 mb-5">
              <img
                src="../img/article_icon.svg"
                alt="article icon"
                className="mb-[28px]"
              />
              <div>
                <h1 className="font-semibold text-[#ADADAD] text-[18px] md:mb-[22px]">
                  Lot's of Article
                </h1>
                <p className="font-light text-white text-sm md:text-[16px]">
                  Mencari info terbaru dengan membaca artikel yang tersedia
                  secara gratis.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 md:mt-[50px] font-semibold text-xl text-[#ADADAD]">
            KenmaDev
          </div>
        </footer>
      </div>
    </>
  );
}

export default blog;
