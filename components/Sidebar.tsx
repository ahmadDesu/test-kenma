"use client";


import { client } from "@/lib/client";
import { groq } from "next-sanity";
import React, { useState, useEffect } from "react";
import ClientSideRoute from "./ClientSideRoute";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";

type Props = {
  htmls: Html[];
};

function Sidebar({ htmls }: Props) {
  return (
    <div className="bg-red-500 min-h-screen h-max w-fit px-4 py-5">
      {htmls.map((html) => (
        <div className="flex flex-col items-start justify-center">
          <ClientSideRoute route={`${`/html/${html.slug.current}`}`}>
            <li key={html.slug.current} className="list-none">{html.title}</li>
          </ClientSideRoute>
        </div>
      ))}
    </div>
  );
}

// function SidebarList({ htmls }: Props) {
//   const uniqueCategoryTitles = new Set();
//   const uniqueItemIds = new Set();
//   const categoryItems = [];

//   // Move the asynchronous logic outside the render function
//   for (const html of htmls) {
//     for (const category of html.categories) {
//       if (!uniqueCategoryTitles.has(category.title)) {
//         uniqueCategoryTitles.add(category.title);
//         const items = htmls
//           .filter((item) =>
//             item.categories.some((cat) => cat.title === category.title)
//           )
//           .map((item) => {
//             if (!uniqueItemIds.has(item._id)) {
//               uniqueItemIds.add(item._id);
//               return (
//                 <div className="font-normal text-lg px-[10px]" key={item._id}>
//                   <li className="list-none ml-3 mb-5">
//                     <ClientSideRoute
//                       key={item._id}
//                       route={`/html/${item.slug.current}`}
//                     >
//                       <div className="text-xl ml-3 text-yellow-500">
//                         Link {item.title}
//                       </div>
//                     </ClientSideRoute>
//                   </li>
//                 </div>
//               );
//             }
//             return null;
//           });
//         categoryItems.push(
//           <li key={category.title} className="list-none">
//             <h2 className="text-white text-2xl">{category.title}</h2>
//             <ul className="border-solid border-[#fff] border-l">{items}</ul>
//           </li>
//         );
//       }
//     }
//   }

//   return <>{categoryItems}</>;
// }

export default Sidebar;
