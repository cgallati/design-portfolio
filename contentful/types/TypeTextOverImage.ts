import * as Contentful from "contentful";

export interface TypeTextOverImageFields {
    hiddenTitle: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
}

export type TypeTextOverImage = Contentful.Entry<TypeTextOverImageFields>;
