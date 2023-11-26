"use client";

import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import Sidebar from "@/components/Sidebar";
import Alert from "@/components/Alert";
import dynamic from "next/dynamic";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const query = groq`
*[_type == 'html'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt asc)
`;

type PropsSlugs = {
  params: {
    slug: string;
  };
  children: string;
  onClick: () => {};
};

export const revalidate = 100;

function Html(props: PropsSlugs) {
  const { params, children, onClick } = props;
  const { slug } = params;
  const [slugs, setSlugs] = useState<Html | null>(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await client.fetch(query, {
          next: { revalidate },
        });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [revalidate]);

  useEffect(() => {
    const fetchHtmlData = async () => {
      const htmlQuery = groq`
      *[_type == 'html' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
      }
    `;

      try {
        const result: Html = await client.fetch(htmlQuery, { slug });
        setSlugs(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchHtmlData();
  }, [slug]);

  return (
    <div className="mt-[70px] flex gap-0">
      <Sidebar htmls={posts} />
      <div className="text-white w-100% md:w-[70%] p-[20px] ml-0 bg-blue-400">
        {/* Menampilkan detail konten disini */}
        <div>{slugs?.title}</div>
        <PortableText
          value={slugs?.body ? slugs.body : []}
          components={RichTextComponents}
        />
        <Alert>Click Me!</Alert>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Html), { ssr: true });
