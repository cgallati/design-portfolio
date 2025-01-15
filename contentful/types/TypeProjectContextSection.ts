import * as Contentful from "contentful";

export interface TypeProjectContextSectionFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    title: Contentful.EntryFields.Symbol;
    paragraph1: Contentful.EntryFields.Text;
    paragraph2?: Contentful.EntryFields.Text;
    paragraph3?: Contentful.EntryFields.Text;
}

export type TypeProjectContextSection = Contentful.Entry<TypeProjectContextSectionFields>;
