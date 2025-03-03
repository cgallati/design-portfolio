import * as Contentful from "contentful";

export interface TypeImgHeadingAndTextFields {
    hiddenTitle: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    heading: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Symbol;
    chunkierVariant: Contentful.EntryFields.Boolean;
}

export type TypeImgHeadingAndText = Contentful.Entry<TypeImgHeadingAndTextFields>;
