"use client";

import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
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
};

export const revalidate = 100;

function Html(props: PropsSlugs) {
  const { params } = props;
  const { slug } = params;
  const [slugs, setSlugs] = useState<Html | null>(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedPosts = await client.fetch(query, {
        next: { revalidate },
      });
      setPosts(fetchedPosts);
    }
    fetchData();
    console.log(posts);
  }, []),
    useEffect(() => {
      async function fetchHtmlData() {
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
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }

      fetchHtmlData();
    }, []);

  return (
    <div className="flex gap-0">
      <div className="text-white">
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
