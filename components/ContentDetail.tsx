import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React from "react";

type PropsSlug = {
  params: {
    slug: string;
  };
};

const queryslug = groq`
*[_type == 'html' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->,
  }
`;
async function ContentDetail({ params: { slug } }: PropsSlug) {
  const html: Html = await client.fetch(queryslug, { slug });
  return (
    <div>
      <h1>{html.title}</h1>
    </div>
  );
}

export default ContentDetail;
