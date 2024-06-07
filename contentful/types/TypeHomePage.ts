import * as Contentful from "contentful";
import { TypeProjectFields } from "./TypeProject";

export interface TypeHomePageFields {
    title: Contentful.EntryFields.Symbol;
    introduction: Contentful.EntryFields.Text;
    projects?: Contentful.Entry<TypeProjectFields>[];
}

export type TypeHomePage = Contentful.Entry<TypeHomePageFields>;
