"use client";

import Sidebar from "../../../components/Sidebar";
import React, { useEffect, useState } from "react";

import { groq } from "next-sanity";
import { client } from "@/lib/client";
import { intersection } from "ts-interface-checker";

const query = groq`
*[_type == 'html'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt asc)
`;

export const revalidate = 100;

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedPosts = await client.fetch(query, {
        next: { revalidate },
      });
      setPosts(fetchedPosts);
    }

    fetchData();
  }, []);

  return (
    <section className="flex justify-start items-start gap-10">
      <Sidebar htmls={posts} />
      <section className="w-full min-h-screen bg-blue-400 px-4 py-5">
        {children}
      </section>
    </section>
  );
}
