import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Image from "next/image";
import thumbnailBlog from "public/image/thumbnail__blog.jpg";
import courseIcon from "public/image/course_icon.svg";
import templateIcon from "public/image/template_icon.svg";
import articleIcon from "public/image/article_icon.svg";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div>
        <section>
          {/* property */}
          <div className="rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[rgba(217,_217,_217,_0.20)] absolute left-[-200px] top-[-180px]"></div>
        </section>

        <Banner />

        <div className="px-[20px]">
          <section>
            <div className="flex flex-col items-center mt-14">
              <div className="flex flex-col items-center w-[300px] lg:w-[640px]">
                <h1 className="text-white text-xl lg:text-[40px] font-bold">
                  Learn <span className="text-[#00C7A3]">More Course</span> Here
                </h1>
                <p className="text-white text-sm lg:text-xl font-light text-center mt-7">
                  Learn from basic to learn programming step by step with
                  explainer easier
                </p>
              </div>

              <div className="mt-10 mb-10">
                <div className="justify-center flex gap-3 lg:gap-20 flex-wrap">
                  <div className="w-full lg:w-[306px] h-fit lg:h-[208px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] px-6 pt-4 pb-10 lg:py-4">
                    <div className="w-[32px] h-[24px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] mb-3 hidden lg:block"></div>
                    <h1 className="text-[#00C7A3] lg:text-[32px] text-xl font-bold lg:font-bold">
                      HTML
                    </h1>
                    <p className="text-white text-sm lg:text-xl font-light mt-3">
                      Learn html to create website from scracth
                    </p>
                  </div>
                  <div className="w-full lg:w-[306px] h-fit lg:h-[208px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] px-6 pt-4 pb-10 lg:py-4">
                    <div className="w-[32px] h-[24px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] mb-3 hidden lg:block"></div>
                    <h1 className="text-[#00C7A3] lg:text-[32px] text-xl font-bold lg:font-bold">
                      CSS
                    </h1>
                    <p className="text-white text-sm lg:text-xl font-light mt-3">
                      Make your website more beautiful with css
                    </p>
                  </div>
                  <div className="w-full lg:w-[306px] h-fit lg:h-[208px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] px-6 pt-4 pb-10 lg:py-4">
                    <div className="w-[32px] h-[24px] bg-[rgba(217,_217,_217,_0.20)] rounded-[10px] mb-3 hidden lg:block"></div>
                    <h1 className="text-[#00C7A3] lg:text-[32px] text-xl font-bold lg:font-bold">
                      JAVASCRIPT
                    </h1>
                    <p className="text-white text-sm lg:text-xl font-light mt-3">
                      Website more interactive with javascript
                    </p>
                  </div>
                </div>
                <div className="px-4 w-full lg:w-[1078px] bg-[rgba(217,_217,_217,_0.20)] lg:px-[38px] py-[14px] mt-3 lg:mt-[43px] mb-[14px] text-center rounded-[10px]">
                  <h1 className="text-white font-bold text-lg lg:text-[32px]">
                    And <span className="text-[#00C7A3]">More Language</span>{" "}
                    Avaible
                  </h1>
                  <p className="text-white text-sm lg:text-xl font-light mt-7">
                    We learn here more than three language. Learn from basic
                    language to expert with step by step and give you study
                    cases to learn from real project.
                  </p>
                </div>
                <div className="flex justify-center items-center mt-7 lg:mt-[47px]">
                  <div className="bg-[#1A5349] text-white flex gap-[10px] items-center text-lg lg:text-[24px] px-4 lg:px-[20px] py-2 lg:py-[15px] rounded-[10px] h-[66px]">
                    Learn Now
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mt-[31px] lg:mt-[62px] flex flex-col items-center mb-[66px]">
              <div className="text-center">
                <div className="text-white text-lg lg:text-[32px] font-medium bg-[linear-gradient(90deg,_rgba(149,_206,_196,_0.45)_0%,_rgba(217,_217,_217,_0.00)_100%)] py-[10px] lg:px-[70px] lg:py-[14px] rounded-[10px] mb-7">
                  Premium <span className="text-[#00C7A3]">Template</span>
                </div>
                <p className="text-white text-[20px] w-[300px] font-light lg:w-[601px] mb-[52px]">
                  With highly quality template that you can use for commercial
                </p>
              </div>

              <div className="justify-center flex gap-3 lg:gap-[36px] flex-wrap">
                <div className="px-[22px] py-[18px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] w-[356px] h-[307px]">
                  <Image
                    src={thumbnailBlog}
                    alt="thumbnail testing"
                    className="w-full h-full rounded-[8px]"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="px-[22px] py-[18px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] w-[356px] h-[307px]">
                  <Image
                    src={thumbnailBlog}
                    alt="thumbnail testing"
                    className="w-full h-full rounded-[8px]"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="px-[22px] py-[18px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] w-[356px] h-[307px]">
                  <Image
                    src={thumbnailBlog}
                    alt="thumbnail testing"
                    className="w-full h-full rounded-[8px]"
                    width={0}
                    height={0}
                  />
                </div>
              </div>

              <div className="bg-[#1A5349] text-white flex gap-[10px] items-center text-[24px] px-[20px] py-[15px] mt-[47px] rounded-[10px] h-[66px]">
                Find More
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
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col items-center">
              <div className="text-center text-white mb-[100px]">
                <h1 className="font-medium text-3xl lg:text-[36px] mb-7">
                  Share Our <span className="text-[#EA0F0F]">Error Case</span>{" "}
                  on Our Blog
                </h1>
                <p className="text-xl font-light">
                  Find an article may relate with your problem here
                </p>
              </div>

              <div className="lg:flex w-full lg:w-[1319px] h-fit lg:h-[450px] p-[10px] lg:p-[26px] rounded-[10px] bg-[rgba(82,_82,_82,_0.80)]">
                <Image
                  src={thumbnailBlog}
                  alt="thumbnail icon"
                  className="rounded-[8px] w-full lg:w-[484px] h-[225px] lg:h-full"
                  width={0}
                  height={0}
                />
                <div className="lg:ml-[46px] text-white w-full h-full relative">
                  <div className="w-full lg:w-[614px] mb-[23px]">
                    <p className="font-light text-sm lg:text-xl mb-[17px] mt-[10px] lg:mt-0">
                      Help you to understand every case that we use
                    </p>
                    <h1 className="font-bold text-2xl lg:text-[40px] mb-[17px] lg:mb-[24px] leading-10">
                      Share Any Blog Post Based On Our Case
                    </h1>
                    <p className="font-light text-sm lg:text-xl mb[23px] lg:mb-[46px]">
                      We writing any issue that we find when we create and
                      learning new language or program.
                    </p>
                  </div>

                  <div className="flex justify-between items-center w-full lg:absolute lg:bottom-0">
                    <div className="bg-[#1A5349] text-white flex gap-[10px] items-center px-[20px] py-[15px]">
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
                    </div>

                    <div>
                      <p className="text-white">&#x266F;javascript</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-center mt-14 lg:mt-[200px]">
              <p className="text-white text-2xl font-semibold">
                &#x266F;Make<span className="text-[#0DCFAC]">Easier</span>
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
