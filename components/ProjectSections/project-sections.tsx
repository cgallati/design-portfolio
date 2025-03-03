import { TypeSectionFields } from "../../contentful/types";
import { FC, useEffect } from "react";
import { Entry } from "contentful";
import { SideBySide } from "../SideBySide";
import { BrandElementsDisplay } from "../BrandElementsDisplay";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Banner } from "../Banner";
import { CenterStage } from "../CenterStage";
import { ProjectContext, SingleContextSection } from "../ProjectContext";
import { DoubleQuoteSection } from "../DoubleQuoteSection";
import { PercentageSection } from "../PercentageSection";
import { ImgHeadingText } from "../ImgHeadingText";
import { CenteredImage } from "../CenteredImage";

type ProjectSectionsProps = {
  sections: Entry<TypeSectionFields>[];
  // addVisibleSection: (section: number) => void;
  // removeVisibleSection: (section: number) => void;
};

type ProjectSlidesProps = {
  slides: Entry<Record<string, any>>[];
  index: number;
  // setVisible: (arg0: boolean) => void;
};

export const ProjectSections: FC<ProjectSectionsProps> = ({
  sections,
  // addVisibleSection,
  // removeVisibleSection,
}) => {
  // const handleSetVisible = (index: number) => (isVisible: boolean) => {
  //   if (isVisible) {
  //     addVisibleSection(index);
  //   } else {
  //     removeVisibleSection(index);
  //   }
  // };

  return (
    <>
      {sections.map((section, index) => (
        <section key={index} id={`project-slide-${index}`}>
          <SectionSlides
            slides={section.fields.content}
            // setVisible={handleSetVisible(index)}
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
  banner: Banner,
  sectionCenteredText: CenterStage,
  projectContextSection: SingleContextSection,
  sectionDoubleQuote: DoubleQuoteSection,
  percentageSection: PercentageSection,
  imgHeadingAndText: ImgHeadingText,
  centeredImageSection: CenteredImage,
};
const SectionSlides: FC<ProjectSlidesProps> = ({
  slides,
  // setVisible,
  index,
}) => {
  // const [ref, entry] = useIntersectionObserver({
  //   threshold: 0.1,
  //   root: null,
  //   rootMargin: "0px",
  // });

  // useEffect(() => {
  //   if (entry?.isIntersecting) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // }, [entry?.isIntersecting]);

  return (
    // <div ref={ref} id={"intersection-ref-" + index}>
    <div id={"intersection-ref-" + index}>
      {slides?.map((slide, index) => {
        console.log(slide.sys.contentType.sys.id);
        const Component = SLIDE_COMPONENT_MAP[slide.sys.contentType.sys.id];
        if (!Component) return "FAILED TO MAP CONTENT TO BLOCK COMPONENT";
        return <Component key={index + "inner"} {...slide} />;
      })}
    </div>
  );
};
