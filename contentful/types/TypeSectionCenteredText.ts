import * as Contentful from "contentful";

export interface TypeSectionCenteredTextFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Text;
}

export type TypeSectionCenteredText = Contentful.Entry<TypeSectionCenteredTextFields>;
