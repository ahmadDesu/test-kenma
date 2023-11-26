import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="w-full h-[70px] flex justify-between items-center absolute z-20 pl-8 lg:pl-16">
        <div className="text-[#00C7A3] font-primary text-lg lg:text-2xl">
          Kenma
        </div>
        <div className="h-[70px] px-[70px] lg:flex items-center justify-center bg-[linear-gradient(140deg,_rgba(13,_207,_172,_0.20)_0%,_rgba(64,_64,_64,_0.00)_100%)] rounded-bl-[20px] hidden">
          <ul className="flex gap-10">
            <li className="text-white font-light text-[20px]">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="text-white font-light text-[20px]">
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="text-white font-light text-[20px]">
              <a href="/template" className="nav-link">
                Template
              </a>
            </li>
            <li className="text-white font-light text-[20px]">
              <a href="/course" className="nav-link">
                Course
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
