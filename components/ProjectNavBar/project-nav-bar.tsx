import React, { useState } from "react";
import Image from "next/image";
import {
  ProjectNav,
  ProjectNavItem,
  StickyNavBar,
  MobileNavToggle,
  NavList,
  ChevronIcon,
} from "./project-nav-bar.styled";
import * as Contentful from "contentful";
import { TypeSectionFields } from "../../contentful/types";
import { useWindowScroll } from "@uidotdev/usehooks";

interface StickyHeaderProps {
  sections: Contentful.Entry<TypeSectionFields>[];
  activeSection: number;
}

export const ProjectNavBar: React.FC<StickyHeaderProps> = ({
  sections,
  activeSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const activeTitle = sections[activeSection]?.fields.title || sections[0]?.fields.title || "";

  return (
    <StickyNavBar>
      <ProjectNav>
        <MobileNavToggle onClick={toggleDropdown} isOpen={isOpen}>
          {activeTitle}
          <ChevronIcon isOpen={isOpen}>
            <Image 
              src="/assets/chevron-down.svg" 
              alt="Dropdown toggle" 
              width={12} 
              height={12} 
            />
          </ChevronIcon>
        </MobileNavToggle>
        <NavList isOpen={isOpen}>
          {sections.map((section, index) => {
            const { title } = section.fields;
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
        </NavList>
      </ProjectNav>
    </StickyNavBar>
  );
};
