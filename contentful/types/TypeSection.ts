import * as Contentful from "contentful";
import { TypeBannerFields } from "./TypeBanner";
import { TypeBrandElementsDisplayFields } from "./TypeBrandElementsDisplay";
import { TypeCenteredImageSectionFields } from "./TypeCenteredImageSection";
import { TypeImgHeadingAndTextFields } from "./TypeImgHeadingAndText";
import { TypeLeftHeaderRightTextFields } from "./TypeLeftHeaderRightText";
import { TypePercentageSectionFields } from "./TypePercentageSection";
import { TypeProjectContextSectionFields } from "./TypeProjectContextSection";
import { TypePrototypeSlidesFields } from "./TypePrototypeSlides";
import { TypeScreenshotAndCaptionFields } from "./TypeScreenshotAndCaption";
import { TypeSectionCenteredTextFields } from "./TypeSectionCenteredText";
import { TypeSectionDoubleQuoteFields } from "./TypeSectionDoubleQuote";
import { TypeSideBySideFields } from "./TypeSideBySide";
import { TypeTextOverImageFields } from "./TypeTextOverImage";

export interface TypeSectionFields {
    title: Contentful.EntryFields.Symbol;
    content?: Contentful.Entry<TypeBannerFields | TypeBrandElementsDisplayFields | TypeCenteredImageSectionFields | TypeImgHeadingAndTextFields | TypeLeftHeaderRightTextFields | TypePercentageSectionFields | TypeProjectContextSectionFields | TypePrototypeSlidesFields | TypeScreenshotAndCaptionFields | TypeSectionCenteredTextFields | TypeSectionDoubleQuoteFields | TypeSideBySideFields | TypeTextOverImageFields>[];
}

export type TypeSection = Contentful.Entry<TypeSectionFields>;
