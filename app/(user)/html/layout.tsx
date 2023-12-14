'use client';

import Sidebar from '../../../components/Sidebar';
import React, {
    useEffect,
    useState
} from "react";

import {groq} from "next-sanity";
import { client } from "@/lib/client";

const query = groq`
*[_type == 'html'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt asc)
`;

export const revalidate = 100;

export default function PageLayout({children}: {
    children: React.ReactNode
}) {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const fetchedPosts = await client.fetch(query, {
                next: {revalidate},
            });
            setPosts(fetchedPosts);
        }

        fetchData();
    }, [])

    return (
        <nav>
            <Sidebar htmls={posts}/>
            {children}
        </nav>
    )
}
