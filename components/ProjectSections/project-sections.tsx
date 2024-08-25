import { TypeSection, TypeSectionFields } from "../../contentful/types";
import { FC, useEffect } from "react";
import { Entry } from "contentful";
import { SideBySide } from "../SideBySide";
import { BrandElementsDisplay } from "../BrandElementsDisplay";
import { useIntersectionObserver } from "@uidotdev/usehooks";

type ProjectSectionsProps = {
  sections: Entry<TypeSectionFields>[];
  addVisibleSection: (section: number) => void;
  removeVisibleSection: (section: number) => void;
};

type ProjectSlidesProps = {
  slides: Entry<Record<string, any>>[];
  index: number;
  setVisible: (arg0: boolean) => void;
};

export const ProjectSections: FC<ProjectSectionsProps> = ({
  sections,
  addVisibleSection,
  removeVisibleSection,
}) => {
  const handleSetVisible = (index: number) => (isVisible: boolean) => {
    if (isVisible) {
      addVisibleSection(index);
    } else {
      removeVisibleSection(index);
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        <section key={index} id={`project-slide-${index}`}>
          <SectionSlides
            slides={section.fields.content}
            setVisible={handleSetVisible(index)}
            index={index}
          />
        </section>
      ))}
    </>
  );
};

const SLIDE_COMPONENT_MAP: Record<string, FC> = {
  sideBySide: SideBySide,
  brandElementsDisplay: BrandElementsDisplay,
};
const SectionSlides: FC<ProjectSlidesProps> = ({
  slides,
  setVisible,
  index,
}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [entry?.isIntersecting]);

  return (
    <div ref={ref} id={"intersection-ref-" + index}>
      {slides?.map((slide, index) => {
        const Component = SLIDE_COMPONENT_MAP[slide.sys.contentType.sys.id];
        return <Component key={index + "inner"} {...slide} />;
      })}
    </div>
  );
};
