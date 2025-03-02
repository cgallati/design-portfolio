import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeProjectContextSectionFields } from "./TypeProjectContextSection";
import { TypeProjectMetadataFields } from "./TypeProjectMetadata";
import { TypeSectionFields } from "./TypeSection";

export interface TypeProjectFields {
    title: Contentful.EntryFields.Symbol;
    shortName?: Contentful.EntryFields.Symbol;
    excerpt?: Contentful.EntryFields.Symbol;
    introduction: Contentful.EntryFields.Symbol;
    projectContextSections: Contentful.Entry<TypeProjectContextSectionFields>[];
    metadata: Contentful.Entry<TypeProjectMetadataFields>;
    coverImage: Contentful.Asset;
    alternateCoverVideo?: Contentful.Asset;
    assetGrid?: Contentful.Asset[];
    largeImageCard?: Contentful.Asset;
    slug: Contentful.EntryFields.Symbol;
    content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    sections?: Contentful.Entry<TypeSectionFields>[];
    centerStage?: Contentful.EntryFields.Text;
}

export type TypeProject = Contentful.Entry<TypeProjectFields>;
