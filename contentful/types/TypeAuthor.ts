import * as Contentful from "contentful";

export interface TypeAuthorFields {
    name: Contentful.EntryFields.Symbol;
    picture: Contentful.Asset;
}

export type TypeAuthor = Contentful.Entry<TypeAuthorFields>;
