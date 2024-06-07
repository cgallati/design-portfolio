import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeSectionFields } from "./TypeSection";

export interface TypeProjectFields {
    title: Contentful.EntryFields.Symbol;
    shortName: Contentful.EntryFields.Symbol;
    introduction: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    excerpt: Contentful.EntryFields.Symbol;
    coverImage: Contentful.Asset;
    order?: Contentful.EntryFields.Integer;
    sections?: Contentful.Entry<TypeSectionFields>[];
    centerStage: Contentful.EntryFields.Text;
}

export type TypeProject = Contentful.Entry<TypeProjectFields>;
