import * as Contentful from "contentful";
import { TypeBannerFields } from "./TypeBanner";
import { TypeBrandElementsDisplayFields } from "./TypeBrandElementsDisplay";
import { TypeSideBySideFields } from "./TypeSideBySide";

export interface TypeSectionFields {
    title: Contentful.EntryFields.Symbol;
    content?: Contentful.Entry<TypeBannerFields | TypeBrandElementsDisplayFields | TypeSideBySideFields>[];
}

export type TypeSection = Contentful.Entry<TypeSectionFields>;
