import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeAuthorFields } from "./TypeAuthor";

export interface TypePostFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    excerpt: Contentful.EntryFields.Symbol;
    coverImage: Contentful.Asset;
    date: Contentful.EntryFields.Date;
    author: Contentful.Entry<TypeAuthorFields>;
}

export type TypePost = Contentful.Entry<TypePostFields>;
