import * as Contentful from "contentful";

export interface TypeBannerFields {
    title: Contentful.EntryFields.Symbol;
    bannerText: Contentful.EntryFields.Symbol;
}

export type TypeBanner = Contentful.Entry<TypeBannerFields>;
