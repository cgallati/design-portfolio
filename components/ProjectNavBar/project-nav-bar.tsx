import React from 'react';
import {ProjectNav, ProjectNavItem, ProjectTitle, StickyNavBar} from "./project-nav-bar.styled";
import * as Contentful from "contentful";
import {TypeSectionFields} from "../../contentful/types";

interface StickyHeaderProps {
    title: string;
    sections: Contentful.Entry<TypeSectionFields>[];
}

export const ProjectNavBar: React.FC<StickyHeaderProps> = ({ title, sections  }) => {
    const [activeSection, setActiveSection] = React.useState(sections[0].fields.title);

    const handleNavClick = (event: React.MouseEvent<HTMLLIElement>) => {
        const target = event.target as HTMLLIElement;
        setActiveSection(target.innerText);
        const element = document.getElementById(target.innerText);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return(
        <StickyNavBar>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectNav>
                <ul>
                    {sections.map((section) => {
                        const {title, content} = section.fields;
                        return <ProjectNavItem key={title} active={title == activeSection} onClick={handleNavClick}>{title}</ProjectNavItem>
                    })}
                </ul>

            </ProjectNav>
        </StickyNavBar>
    );
};

