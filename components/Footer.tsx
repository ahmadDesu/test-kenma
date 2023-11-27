import React from "react";
import courseIcon from "public/image/course_icon.svg";
import templateIcon from "public/image/template_icon.svg";
import articleIcon from "public/image/article_icon.svg";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="w-full h-fit flex flex-col justify-center bg-[rgba(82,82,82,.80)] p-5 lg:px-[60px] mt-14 lg:mt-[230px]">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-[290px] flex lg:block gap-3 mb-5">
            <Image src={courseIcon} alt="course icon" width={35} height={35} />
            <div className="">
              <h1 className="font-semibold text-[#ADADAD] text-[18px] lg:mb-[22px]">
                Free Course
              </h1>
              <p className="font-light text-white text-sm lg:text[16px]">
                Belajar Banyak Bahasa Pemrograman Dengan Gratis.
              </p>
            </div>
          </div>
          <div className="lg:w-[290px] flex lg:block gap-3 mb-5">
            <Image
              src={templateIcon}
              alt="template icon"
              width={35}
              height={35}
            />
            <div>
              <h1 className="font-semibold text-[#ADADAD] text-[18px] lg:mb-[22px]">
                Build Easily With Template
              </h1>
              <p className="font-light text-white text-sm lg:text-[16px]">
                Membuat website menjadi semakin mudah dengan template yang siap
                pakai.
              </p>
            </div>
          </div>
          <div className="lg:w-[290px] flex lg:block gap-3 mb-5">
            <Image
              src={articleIcon}
              alt="article icon"
              width={35}
              height={35}
            />
            <div>
              <h1 className="font-semibold text-[#ADADAD] text-[18px] lg:mb-[22px]">
                Lot&#x266F;s of Article
              </h1>
              <p className="font-light text-white text-sm lg:text-[16px]">
                Mencari info terbaru dengan membaca artikel yang tersedia secara
                gratis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 lg:mt-[50px] font-semibold text-xl text-[#ADADAD]">
          KenmaDev
        </div>
      </footer>
    </div>
  );
}

export default Footer;
