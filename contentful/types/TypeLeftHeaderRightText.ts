import * as Contentful from "contentful";

export interface TypeLeftHeaderRightTextFields {
    header: Contentful.EntryFields.Symbol;
    text: Contentful.EntryFields.Symbol;
}

export type TypeLeftHeaderRightText = Contentful.Entry<TypeLeftHeaderRightTextFields>;
