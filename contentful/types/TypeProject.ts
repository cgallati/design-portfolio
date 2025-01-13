import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeProjectContextSectionFields } from "./TypeProjectContextSection";
import { TypeProjectMetadataFields } from "./TypeProjectMetadata";
import { TypeSectionFields } from "./TypeSection";

export interface TypeProjectFields {
    title: Contentful.EntryFields.Symbol;
    shortName: Contentful.EntryFields.Symbol;
    excerpt: Contentful.EntryFields.Symbol;
    introduction: Contentful.EntryFields.Symbol;
    projectContextSections: Contentful.Entry<TypeProjectContextSectionFields>[];
    metadata: Contentful.Entry<TypeProjectMetadataFields>;
    largeImageCard: Contentful.Asset;
    slug: Contentful.EntryFields.Symbol;
    content: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    coverImage: Contentful.Asset;
    order?: Contentful.EntryFields.Integer;
    sections: Contentful.Entry<TypeSectionFields>[];
    centerStage: Contentful.EntryFields.Text;
}

export type TypeProject = Contentful.Entry<TypeProjectFields>;
