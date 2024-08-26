import * as Contentful from "contentful";
import * as CFRichTextTypes from "@contentful/rich-text-types";
import {TypeSectionFields} from "../contentful/types";

export type Project = {
  title: string;
  shortName: string;
  introduction: string;
  subtitle: string;
  bgImage: Contentful.Asset;
  slug: string;
  content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  next?: string;
  previous?: string;
  order?: number;
  sections?: Contentful.Entry<TypeSectionFields>[];
}

export type HomePage = {
    title: string;
    introduction: string;
    projects: Project[];
}