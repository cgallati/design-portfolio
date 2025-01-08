import * as Contentful from "contentful";

export interface TypeProjectMetadataFields {
    contentEntryTitle: Contentful.EntryFields.Symbol;
    role?: Contentful.EntryFields.Symbol;
    team?: Contentful.EntryFields.Symbol[];
    skills?: Contentful.EntryFields.Symbol[];
    timeline?: Contentful.EntryFields.Symbol;
}

export type TypeProjectMetadata = Contentful.Entry<TypeProjectMetadataFields>;
