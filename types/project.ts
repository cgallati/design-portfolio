import * as Contentful from "contentful";
import * as CFRichTextTypes from "@contentful/rich-text-types";

export interface IProject {
  title: string;
  subtitle: string;
  bgImage: Contentful.Asset;
  slug: string;
  content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  next?: string;
  previous?: string;
  order?: number;
}
