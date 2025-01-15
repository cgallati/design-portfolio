import * as Contentful from "contentful";

export interface TypeSectionDoubleQuoteFields {
    hiddenName: Contentful.EntryFields.Symbol;
    blurb: Contentful.EntryFields.Symbol;
    label1: Contentful.EntryFields.Symbol;
    label2?: Contentful.EntryFields.Symbol;
    quote1: Contentful.EntryFields.Symbol;
    quote2: Contentful.EntryFields.Symbol;
}

export type TypeSectionDoubleQuote = Contentful.Entry<TypeSectionDoubleQuoteFields>;
