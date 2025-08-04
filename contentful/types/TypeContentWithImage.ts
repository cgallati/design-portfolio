import * as Contentful from "contentful";

export interface TypeContentWithImageFields {
    heading?: Contentful.EntryFields.Symbol;
    subtitle: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Text;
    asset: Contentful.Asset;
}

export type TypeContentWithImage = Contentful.Entry<TypeContentWithImageFields>;
