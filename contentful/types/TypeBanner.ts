import * as Contentful from "contentful";

export interface TypeBannerFields {
    bannerText: Contentful.EntryFields.Symbol;
}

export type TypeBanner = Contentful.Entry<TypeBannerFields>;
