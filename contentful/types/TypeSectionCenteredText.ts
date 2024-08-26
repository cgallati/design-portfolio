import * as Contentful from "contentful";

export interface TypeSectionCenteredTextFields {
    text: Contentful.EntryFields.Text;
}

export type TypeSectionCenteredText = Contentful.Entry<TypeSectionCenteredTextFields>;
