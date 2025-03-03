import * as Contentful from "contentful";

export interface TypeTitleAndTextFields {
    title?: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Text;
}

export type TypeTitleAndText = Contentful.Entry<TypeTitleAndTextFields>;
