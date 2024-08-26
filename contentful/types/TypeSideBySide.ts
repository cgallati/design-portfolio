import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeSideBySideFields {
    title: Contentful.EntryFields.Symbol;
    darkMode?: Contentful.EntryFields.Boolean;
    asset: Contentful.Asset;
    richText: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    photoOnLeft: Contentful.EntryFields.Boolean;
    offsetImage?: Contentful.EntryFields.Boolean;
}

export type TypeSideBySide = Contentful.Entry<TypeSideBySideFields>;
