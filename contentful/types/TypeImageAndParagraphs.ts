import * as Contentful from "contentful";

export interface TypeImageAndParagraphsFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    image?: Contentful.Asset;
    paragraph1: Contentful.EntryFields.Text;
    paragraph2?: Contentful.EntryFields.Text;
}

export type TypeImageAndParagraphs = Contentful.Entry<TypeImageAndParagraphsFields>;
