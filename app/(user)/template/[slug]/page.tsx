import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 0;

async function Template({ params: { slug } }: Props) {
  const query = groq`*[_type == 'template' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->,
  }`;

  const template: Template = await client.fetch(query, { slug });

  return (
    <>
      <nav className="px-5 md:px-[100px] py-[46px] z-20">
        <div className="flex items-center mb-[0px]">
          <Link href="/template">
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
      {/* <!-- quote section --> */}
      {/* <!-- <section>
        <p className="text-white font-light text-center text-[20px] mt-[9px]">
          Make easy with template
        </p>
      </section> --> */}

      {/* <!-- detail content --> */}
      <section>
        <div className="px-5 md:px-[100px]">
          <div className="text-white mb-[46px]">
            <h1 className="font-medium text-3xl md:text-[40px] mb-5">
              {template.title}
            </h1>
            <p className="font-light text-xl mb-5">{template.description}</p>
            <p className="font-light text-[20px]">
              Category by{" "}
              {template.categories.map((category) => (
                <span className="text-[#00C7A3]">#{category.title}</span>
              ))}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-[30px] md:w-full md:h-[450px] p-4 md:p-[25px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px]">
            <Image
              className="md:w-full h-fit md:h-full object-cover rounded-[8px]"
              src={urlFor(template.mainImage).url()}
              alt={template.description}
              layout="responsive"
              width={263} // Set the required width
              height={263} // Set the required height
            />
            <div>
              <div className="flex gap-5 md:mb-[50px]">
                <button className="text-white flex items-center gap-[10px] bg-[#1A5349] px-[20px] py-[15px] rounded-[10px]">
                  React
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
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
                <button className="text-white flex items-center gap-[10px] bg-[#1A5349] px-[20px] py-[15px] rounded-[10px]">
                  Html
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
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center w-full my-28">
          <p className="text-[#00C7A3]">#BuildEasier</p>
        </div>
      </section>
    </>
  );
}

export default Template;
