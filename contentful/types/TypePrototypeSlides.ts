import * as Contentful from "contentful";
import { TypeCardSlideFields } from "./TypeCardSlide";

export interface TypePrototypeSlidesFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    slides?: Contentful.Entry<TypeCardSlideFields>[];
}

export type TypePrototypeSlides = Contentful.Entry<TypePrototypeSlidesFields>;
