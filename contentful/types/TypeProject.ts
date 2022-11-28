import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeProjectFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  excerpt: Contentful.EntryFields.Symbol;
  coverImage: Contentful.Asset;
  order: Contentful.EntryFields.Integer;
}

export type TypeProject = Contentful.Entry<TypeProjectFields>;
