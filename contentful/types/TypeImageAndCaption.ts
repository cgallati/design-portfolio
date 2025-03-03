import * as Contentful from "contentful";

export interface TypeImageAndCaptionFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    caption: Contentful.EntryFields.Symbol;
}

export type TypeImageAndCaption = Contentful.Entry<TypeImageAndCaptionFields>;
