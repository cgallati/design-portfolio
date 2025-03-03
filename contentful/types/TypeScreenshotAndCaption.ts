import * as Contentful from "contentful";

export interface TypeScreenshotAndCaptionFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    screenshot: Contentful.Asset;
    caption: Contentful.EntryFields.Symbol;
}

export type TypeScreenshotAndCaption = Contentful.Entry<TypeScreenshotAndCaptionFields>;
