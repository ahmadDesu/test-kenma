import React from "react";
import Link from "next/link";
import "../app/globals.css";
import { useRouter } from "next/router";
import { useContext } from "react";

function DetailBlog() {
  const router = useRouter();
  const returnTo = (router.query.returnTo as string) || "/"; // Default to the homepage if "returnTo" is not provided.

  return (
    <>
      <nav className="px-5 flex items-center h-20 mb-5">
        <div>
          <button onClick={() => router.push(returnTo)}>
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
      </nav>

      <header className="rounded-[10px] px-4 md:px-[50px] py-4 md:py-[32px] w-full h-fit md:h-[313px] bg-[rgba(217,_217,_217,_0.05)] text-white mb-[50px] md:mb-[136px]">
        <h1 className="text-lg md:text-[40px] font-bold mb-5 md:mb-[100px]">
          Cara mengatasi error data null pada javascript
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-5 md:mb-0 flex items-center">
            <img
              src="../img/thumbnail__blog.jpg"
              alt="author"
              className="rounded-full w-[50px] h-[50px] mr-[24px]"
            />

            <div className="mr-5 md:mr-[45px]">
              <h4 className="text-sm md:text-base">Author</h4>
              <p className="text-sm md:text-base">Kenma Dev</p>
            </div>

            <div>
              <h4 className="text-sm md:text-base">Last Updated</h4>
              <p className="text-sm md:text-base">August, 18 2023</p>
            </div>
          </div>
          <p className="font-semibold text-md md:text-[36px] text-white">
            #html
          </p>
        </div>
      </header>

      <section className="text-white">
        <h4 className="font-bold text-2xl md:text-[40px] mb-5 md:mb-[55px]">
          1. Penyebab data null pada variabel
        </h4>
        <p className="text-lg md:text-[24px] mb-5  md:mb-[81px] font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sed
          iusto adipisci odit eveniet? Perferendis delectus sit saepe cupiditate
          aspernatur incidunt quod, alias, omnis at officia facere doloribus
          expedita sint laboriosam! Ipsum explicabo, temporibus autem a suscipit
          nulla consectetur earum quae non, vel veniam error doloribus quis
          debitis. Dicta dolorem numquam ea, beatae est rerum! Quod in quae
          molestias praesentium fugiat id rerum ducimus. Iusto sed aliquid
          officiis ab deleniti repudiandae unde quia aliquam laboriosam
          assumenda obcaecati voluptate dolorem explicabo consequatur, nesciunt
          dicta quis quaerat placeat quas maiores quos labore vel non accusamus!
          Nemo, quas? Quas voluptatibus neque aspernatur nihil?
        </p>
        <h4 className="font-bold text-2xl md:text-[40px] mb-5 md:mb-[55px]">
          2. Cara mengatasi data null pada variabel
        </h4>
        <p className="text-lg md:text-[24px] mb-5 md:mb-[81px] font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente sed
          iusto adipisci odit eveniet? Perferendis delectus sit saepe cupiditate
          aspernatur incidunt quod, alias, omnis at officia facere doloribus
          expedita sint laboriosam! Ipsum explicabo, temporibus autem a suscipit
          nulla consectetur earum quae non, vel veniam error doloribus quis
          debitis. Dicta dolorem numquam ea, beatae est rerum! Quod in quae
          molestias praesentium fugiat id rerum ducimus. Iusto sed aliquid
          officiis ab deleniti repudiandae unde quia aliquam laboriosam
          assumenda obcaecati voluptate dolorem explicabo consequatur, nesciunt
          dicta quis quaerat placeat quas maiores quos labore vel non accusamus!
          Nemo, quas? Quas voluptatibus neque aspernatur nihil?
        </p>
        <figure className="mb-5 md:mb-[81px]">
          <img
            src="../img/thumbnail__blog.jpg"
            alt="image content"
            className="w-full md:w-[1212px] h-fit md:h-[580px] rounded-[8px] m-auto"
          />
          `
          <figcaption className="text-white text-xl font-light text-center mt-[14px]">
            null pada variable
          </figcaption>
        </figure>
        <p className="text-lg md:text-[24px] mb-5 md:mb-[81px] font-light">
          Itu tadi merupakan cara mengatasi error pada data null di variabel
          pada pemprograman javascript.
        </p>
      </section>
    </>
  );
}

export default DetailBlog;
