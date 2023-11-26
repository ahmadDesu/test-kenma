import React from "react";
import "../app/globals.css";
import Header from "@/components/Header";

function course() {
  return (
    <>
      <Header />

      <section>
        {/* <!-- Property --> */}
        <div className="rounded-full w-[400px] h-[400px] bg-[rgba(217,_217,_217,_0.20)] absolute left-[-200px] top-[-180px]"></div>
      </section>

      <div className="absolute top-0 w-full z-0">
        {/* <!-- banner - hero section --> */}
        <section>
          {/* <!-- Hero Section --> */}
          <div className="w-full h-[400px] bg-[rgba(217,_217,_217,_0.05)] relative top-0 flex items-center justify-center">
            <div className="w-[798px]">
              <h1 className="text-white text-3xl md:text-[40px] font-bold text-center font-primary">
                Learn
                <span className="text-[#00C7A3]">More Course</span> Here
              </h1>
              <p className="mt-7 text-center text-white text-xl font-light">
                Learn from basic to learn programming step by step with
                explainer easier
              </p>
            </div>
          </div>
        </section>
        {/* <!-- quote section --> */}
        <section>
          <p className="text-white font-light text-center text-[20px] mt-[9px]">
            Read More To Knew More
          </p>
        </section>
        {/* <!-- grid course section --> */}
        <section className="flex flex-col md:items-center p-5">
          <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-[100px] w-full md:w-[1037px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] p-[20px] relative">
            <div className="text-white">
              {/* <!-- Property can be Icon if want --> */}
              {/* <!-- <div
            className="w-[32px] h-[24px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] mb-3"
          ></div> --> */}
              <div className="mb-[48px] md:mb-0">
                <h1 className="font-semibold text-[32px]">HTML</h1>
                <p className="font-light text-xl">
                  Learn how to make a website from basic
                </p>
              </div>
              <a href="../component/courseDetail.html">
                <div className="flex gap-[10px] bg-[#1A5349] rounded-[10px] px-[20px] py-[15px] text-xl font-light w-[178px] md:absolute md:bottom-[20px]">
                  Learn Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    className="w-[24px] h-[24px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <img
              src="../img/thumbnail__course.png"
              alt="thumbnail__course"
              className="w-full md:w-[574px] h-fit md:h-[309px] rounded-[8px]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[41px] mt-[41px]">
            <div className="w-full md:w-[498px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] p-[20px] text-white">
              <img
                src="../img/thumbnail__course.png"
                alt="course css"
                className="w-full h-fit md:h-[218px] rounded-[8px] mb-[40px]"
              />
              <h1 className="font-semibold text-[32px] md:text-xl mb-[10px]">
                CSS
              </h1>
              <p className="font-light text-xl md:text-[16px] mb-[48px]">
                Learn how to styling a website to be beautiful
              </p>
              <a href="../component/courseDetail.html">
                <div className="inline-flex gap-[10px] bg-[#1A5349] rounded-[10px] px-[20px] py-[15px] text-xl md:text-sm font-light">
                  Learn Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div className="w-full md:w-[498px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] p-[20px] text-white">
              <img
                src="../img/thumbnail__course.png"
                alt="course js"
                className="w-full h-fit md:h-[218px] rounded-[8px] mb-[40px]"
              />
              <h1 className="font-semibold text-[32px] md:text-xl mb-[10px]">
                JAVASCRIPT
              </h1>
              <p className="font-light text-xl md:text-[16px] mb-[48px]">
                Learn how to make a website more interactive
              </p>
              <a href="../component/courseDetail.html">
                <div className="inline-flex gap-[10px] bg-[#1A5349] rounded-[10px] px-[20px] py-[15px] text-xl md:text-sm font-light">
                  Learn Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="flex justify-center mt-[90px]">
          <h2 className="text-white font-semibold text-[40px]">
            More Course is <span className="text-[#0DCFAC]">Coming Soon</span>
          </h2>
        </section>

        {/* <!-- tagline section --> */}
        <section>
          <div className="flex justify-center mt-[200px]">
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

export default course;
