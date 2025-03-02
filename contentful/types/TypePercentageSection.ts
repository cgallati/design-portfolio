import * as Contentful from "contentful";

export interface TypePercentageSectionFields {
    hiddenTitle: Contentful.EntryFields.Symbol;
    percentage: Contentful.EntryFields.Integer;
    blurb: Contentful.EntryFields.Symbol;
}

export type TypePercentageSection = Contentful.Entry<TypePercentageSectionFields>;
