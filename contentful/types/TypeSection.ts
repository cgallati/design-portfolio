import * as Contentful from "contentful";
import { TypeBannerFields } from "./TypeBanner";
import { TypeBrandElementsDisplayFields } from "./TypeBrandElementsDisplay";
import { TypeCenteredImageSectionFields } from "./TypeCenteredImageSection";
import { TypeImgHeadingAndTextFields } from "./TypeImgHeadingAndText";
import { TypeLeftHeaderRightTextFields } from "./TypeLeftHeaderRightText";
import { TypePercentageSectionFields } from "./TypePercentageSection";
import { TypeProjectContextSectionFields } from "./TypeProjectContextSection";
import { TypeScreenshotAndCaptionFields } from "./TypeScreenshotAndCaption";
import { TypeSectionCenteredTextFields } from "./TypeSectionCenteredText";
import { TypeSectionDoubleQuoteFields } from "./TypeSectionDoubleQuote";
import { TypeSideBySideFields } from "./TypeSideBySide";

export interface TypeSectionFields {
    title: Contentful.EntryFields.Symbol;
    content?: Contentful.Entry<TypeBannerFields | TypeBrandElementsDisplayFields | TypeCenteredImageSectionFields | TypeImgHeadingAndTextFields | TypeLeftHeaderRightTextFields | TypePercentageSectionFields | TypeProjectContextSectionFields | TypeScreenshotAndCaptionFields | TypeSectionCenteredTextFields | TypeSectionDoubleQuoteFields | TypeSideBySideFields>[];
}

export type TypeSection = Contentful.Entry<TypeSectionFields>;
