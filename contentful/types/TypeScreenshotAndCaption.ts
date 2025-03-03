import * as Contentful from "contentful";

export interface TypeScreenshotAndCaptionFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    screenshot: Contentful.Asset;
    shortcaption: Contentful.EntryFields.Symbol;
    caption: Contentful.EntryFields.Text;
}

export type TypeScreenshotAndCaption = Contentful.Entry<TypeScreenshotAndCaptionFields>;
