import * as Contentful from "contentful";

export interface TypeImageAndCaptionFields {
    hiddenTitle?: Contentful.EntryFields.Symbol;
    image: Contentful.Asset;
    biggerImageAndGreyBg?: Contentful.EntryFields.Boolean;
    caption: Contentful.EntryFields.Text;
}

export type TypeImageAndCaption = Contentful.Entry<TypeImageAndCaptionFields>;
