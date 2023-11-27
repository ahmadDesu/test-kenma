"use client";

import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

//highlighter react (trying to use)
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// youtube
import getYouTubeId from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import Refractor from "react-refractor";
// Load any languages you want to use from `refractor`
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import { useState } from "react";

//You'll need to register the languages you want to use
Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex justify-center">
          <Image
            className="py-4 rounded-xl"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={600}
            height={200}
          />
        </div>
      );
    },
    // myCodeField: ({ value }: any) => {
    //   return <Refractor language={value.language} value={value.code} className="bg-blue-900 rounded-sm p-5 text-yellow-500"/>;
    // },

    MyCodeField: ({ value }: any) => {
      const [copy, setCopy] = useState(false);
      //const codeText = "h1 hello";

      //syntax higlighting need "use client"
      return (
        <div className="py-4">
          <div className="w-full bg-[#3a404d] rounded-md overflow-hidden">
            <div className="flex justify-between px-4 text-white text-xs items-center h-10">
              <p className="text-sm">{value.filename}</p>

              {copy ? (
                <button className="flex items-center justify-center">
                  <span className="text-base mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  Copied!
                </button>
              ) : (
                <button
                  className="flex items-center justify-center"
                  onClick={() => {
                    navigator.clipboard.writeText(value.code);
                    setCopy(true);
                    setTimeout(() => {
                      setCopy(false);
                    }, 3000);
                  }}
                >
                  <span className="text-base mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </span>
                  Copy Code
                </button>
              )}
            </div>
            <SyntaxHighlighter
              language="jsx"
              style={atomOneDark}
              customStyle={{
                padding: "25px",
              }}
              wrapLongLines={true}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        </div>
      );
    },

    youtube: ({ value }: any) => {
      const url = value.url;
      if (!url) {
        return <div>Missing YouTube URL</div>;
      }

      const id = getYouTubeId(url);
      if (!id) {
        return <div>Invalid YouTube URL</div>;
      }

      return (
        <div className="flex justify-center p-0">
          <div className="w-[600px] relative my-4 md:my-10">
            <LiteYouTubeEmbed id={id} title="" />
          </div>
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f7ab0a] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
