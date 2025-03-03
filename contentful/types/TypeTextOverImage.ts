import * as Contentful from "contentful";

export interface TypeTextOverImageFields {
    hiddenTitle: Contentful.EntryFields.Symbol;
    short_text: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    text: Contentful.EntryFields.Text;
}

export type TypeTextOverImage = Contentful.Entry<TypeTextOverImageFields>;
