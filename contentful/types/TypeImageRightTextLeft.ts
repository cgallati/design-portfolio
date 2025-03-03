import * as Contentful from "contentful";

export interface TypeImageRightTextLeftFields {
    hiddenTitle: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    heading: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Symbol;
}

export type TypeImageRightTextLeft = Contentful.Entry<TypeImageRightTextLeftFields>;
