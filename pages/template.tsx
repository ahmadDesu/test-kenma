import Header from "@/components/Header";
import React from "react";
import "../app/globals.css";
import { groq } from "next-sanity";
import { useState, useEffect } from "react";
import { client } from "@/lib/client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import category from "@/app/(admin)/sanity/schemas/category";
import ClientSideRoute from "@/components/ClientSideRoute";
import Footer from "@/components/Footer";
import Link from "next/link";

const query = groq`
*[_type == 'template'] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc, length(categories[]))
`;

export const revalidate = 0;

type Props = {
  templates: Template[];
};

function TemplateData({ templates }: Props) {
  return (
    <div className="mx-[50px] flex flex-wrap gap-6 mt-14 mb-14">
      {templates.map((template) => (
        <div>
          {/* <!-- recent updated --> */}
          <section>
            {/* <!-- card template --> */}
            <ClientSideRoute
              key={template._id}
              route={`/template/${template.slug.current}`}
            >
              <div>
                {/* <!-- card template list --> */}
                <Link href="templateDetail.html" className="p-0 m-0">
                  <div className="relative w-full md:w-[380px] h-[580px] md:h-[430px] bg-[rgba(82,_82,_82,_0.80)] rounded-[10px] p-[20px]">
                    <Image
                      className="w-full h-[263px] rounded-[8px] object-cover"
                      src={urlFor(template.mainImage).url()}
                      alt={template.description}
                      width={263} // Set the required width
                      height={263} // Set the required height
                    />
                    <h1 className="text-white font-medium text-xl mt-5">
                      {template.title && template.title.length > 86
                        ? `${template.title.slice(0, 86)}...`
                        : template.title}
                    </h1>
                    <div className="absolute bottom-0">
                      {template.categories.map((category) => (
                        <p className="text-[#00C7A3] font-normal text-lg mt-3">
                          #{category.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </ClientSideRoute>
            {/* <!-- end of card template--> */}
          </section>
        </div>
      ))}
    </div>
  );
}

function Template() {
  const [templates, setTemplates] = useState([]);

  const websiteCategoryTotal = getCategoryTotal(templates, "website");
  const androidCategoryTotal = getCategoryTotal(templates, "android");

  useEffect(() => {
    // Fetch data asynchronously
    (async () => {
      const fetchedTemplates = await client.fetch(query, {
        next: { revalidate },
      }); // Assuming client is available
      setTemplates(fetchedTemplates);
      console.log(fetchedTemplates);
    })();
  }, []);

  if (!templates) {
    return <div>Loading...</div>;
  }

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
            <div className="w-[550px] md:w-[798px]">
              <h1 className="text-white text-3xl md:text-[40px] font-bold text-center font-primary">
                Create Website
                <span className="text-[#00C7A3]"> More Faster</span> With Our
                Template
              </h1>
              <p className="mt-7 text-center text-white text-xl font-light">
                Give you more resource for learning coding and you can make
                better and faster your own business with our high quality
                template
              </p>
            </div>
          </div>
        </section>
        {/* <!-- quote section --> */}
        <section>
          <p className="text-white font-light text-center text-[20px] mt-[9px] mb-5 md:mb-0">
            Read More To Knew More
          </p>
        </section>
        {/* <!-- category section --> */}
        <section>
          <div className="ml-[50px]">
            <div className="mb-[54px]">
              <h1 className="font-bold text-3xl md:text-[40px] text-white mb-4">
                Category
              </h1>
              <p className="font-light text-lg md:text-[20px] text-white">
                Find your favourite template to use on your project.
              </p>
            </div>
            <div key={websiteCategoryTotal} className="flex gap-[26px]">
              <div className="w-[236px] h-[88px] rounded-[10px] border-solid border-[0.8px] border-[#72E3CF] bg-[rgba(82,_82,_82,_0.80)] text-white px-[22px] flex flex-col justify-center">
                <h4 className="font-medium text-[20px] mb-[9px]">Web Design</h4>
                <p className="font-light text-[20px] mb-0">
                  {websiteCategoryTotal}
                </p>
              </div>
              <div className="w-[236px] h-[88px] rounded-[10px] border-solid border-[0.8px] border-[#72E3CF] bg-[rgba(82,_82,_82,_0.80)] text-white px-[22px] flex flex-col justify-center">
                <h4 className="font-medium text-[20px] mb-[9px]">
                  Mobile Design
                </h4>
                <p className="font-light text-[20px] mb-0">
                  {androidCategoryTotal}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[88px] mx-[50px]">
          <div className="text-white">
            <h1 className="font-bold text-3xl md:text-[40px]">
              Recent Updated
            </h1>
            <p className="font-light text-xl">Look our recent template here.</p>
          </div>
        </section>
        <TemplateData templates={templates} />

        {/* <!-- tagline section --> */}
        <section>
          <div className="flex justify-center mt-[200px]">
            <p className="text-white text-2xl font-semibold">
              #Make<span className="text-[#0DCFAC]">Easier</span>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

function getCategoryTotal(templates: Template[], category: string) {
  const categoryTemplates = templates.filter((template) =>
    template.categories.some((cat) => cat.title === category)
  );
  return categoryTemplates.length;
}

export default Template;
