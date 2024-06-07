import * as Contentful from "contentful";

export interface TypeSectionFields {
    title: Contentful.EntryFields.Symbol;
    content?: Contentful.Entry<Record<string, any>>[];
}

export type TypeSection = Contentful.Entry<TypeSectionFields>;
