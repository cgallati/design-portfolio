import {TypeSection, TypeSectionFields} from "../../contentful/types";
import {FC} from "react";
import {Entry} from "contentful";
import {SideBySide} from "../SideBySide";
import {BrandElementsDisplay} from "../BrandElementsDisplay";

type ProjectSectionsProps = {
    sections: Entry<TypeSectionFields>[];
}

type ProjectSlidesProps = {
    slides: Entry<Record<string, any>>[]
}



export const ProjectSections: FC<ProjectSectionsProps> = ({sections}) => {
    return (
        <>
        {sections.map((section, index) =>
            <section key={index}>
                <SectionSlides slides={section.fields.content} />
            </section>
        )}
        </>
    );
}

// const Component = SECTION_COMPONENTS[section.sys.contentType.sys.id];
// return <Component key={index} {...section} />;


const SLIDE_COMPONENT_MAP: Record<string, FC> = {
    "sideBySide": SideBySide,
    "brandElementsDisplay": BrandElementsDisplay,
}
const SectionSlides: FC<ProjectSlidesProps> = ({slides}) => {
    return (
        <>
        {slides?.map((slide, index) => {
            const Component = SLIDE_COMPONENT_MAP[slide.sys.contentType.sys.id];
            // @ts-ignore
            return <Component key={index} {...slide} />
        })}
        </>
    );
}