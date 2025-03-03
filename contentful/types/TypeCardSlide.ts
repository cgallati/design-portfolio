import * as Contentful from "contentful";

export interface TypeCardSlideFields {
    title?: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Text;
    image: Contentful.Asset;
}

export type TypeCardSlide = Contentful.Entry<TypeCardSlideFields>;
