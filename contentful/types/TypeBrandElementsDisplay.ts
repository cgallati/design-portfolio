import * as Contentful from "contentful";

export interface TypeBrandElementsDisplayFields {
    name?: Contentful.EntryFields.Symbol;
    colors: Contentful.EntryFields.Symbol[];
    icons?: Contentful.Asset[];
    leftLogo: Contentful.Asset;
}

export type TypeBrandElementsDisplay = Contentful.Entry<TypeBrandElementsDisplayFields>;
