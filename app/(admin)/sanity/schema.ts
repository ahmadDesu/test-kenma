import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import youtubeBlock from "./schemas/youtubeBlock";
import template from "./schemas/template";
import html from "./schemas/html";
import css from "./schemas/css";
import javascript from "./schemas/javascript";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    html,
    css,
    javascript,
    author,
    category,
    blockContent,
    youtubeBlock,
    template,
  ],
};
