import * as Contentful from "contentful";
import { TypeBannerFields } from "./TypeBanner";
import { TypeBrandElementsDisplayFields } from "./TypeBrandElementsDisplay";
import { TypeCenteredImageSectionFields } from "./TypeCenteredImageSection";
import { TypeImgHeadingAndTextFields } from "./TypeImgHeadingAndText";
import { TypePercentageSectionFields } from "./TypePercentageSection";
import { TypeProjectContextSectionFields } from "./TypeProjectContextSection";
import { TypeSectionCenteredTextFields } from "./TypeSectionCenteredText";
import { TypeSectionDoubleQuoteFields } from "./TypeSectionDoubleQuote";
import { TypeSideBySideFields } from "./TypeSideBySide";

export interface TypeSectionFields {
    title: Contentful.EntryFields.Symbol;
    content?: Contentful.Entry<TypeBannerFields | TypeBrandElementsDisplayFields | TypeCenteredImageSectionFields | TypeImgHeadingAndTextFields | TypePercentageSectionFields | TypeProjectContextSectionFields | TypeSectionCenteredTextFields | TypeSectionDoubleQuoteFields | TypeSideBySideFields>[];
}

export type TypeSection = Contentful.Entry<TypeSectionFields>;
