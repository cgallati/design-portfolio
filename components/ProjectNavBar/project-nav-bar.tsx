import React from "react";
import {
  ProjectNav,
  ProjectNavItem,
  ProjectTitle,
  StickyNavBar,
} from "./project-nav-bar.styled";
import * as Contentful from "contentful";
import { TypeSectionFields } from "../../contentful/types";
import { useWindowScroll } from "@uidotdev/usehooks";

interface StickyHeaderProps {
  title: string;
  sections: Contentful.Entry<TypeSectionFields>[];
  activeSection: number;
}

export const ProjectNavBar: React.FC<StickyHeaderProps> = ({
  title,
  sections,
  activeSection,
}) => {
  const [_coords, scrollTo] = useWindowScroll();

  const handleNavClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    if (index === -1) {
      scrollTo({ left: 0, top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(`project-slide-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <StickyNavBar>
      <ProjectTitle onClick={(event) => handleNavClick(event, -1)}>
        {title}
      </ProjectTitle>
      <ProjectNav>
        <ul>
          {sections.map((section, index) => {
            const { title, content } = section.fields;
            return (
              <ProjectNavItem
                key={title}
                active={index === activeSection}
                onClick={(event) => handleNavClick(event, index)}
              >
                {title}
              </ProjectNavItem>
            );
          })}
        </ul>
      </ProjectNav>
    </StickyNavBar>
  );
};
