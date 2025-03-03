import * as Contentful from "contentful";

export interface TypeCenteredImageSectionFields {
    hiddenName: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
}

export type TypeCenteredImageSection = Contentful.Entry<TypeCenteredImageSectionFields>;
