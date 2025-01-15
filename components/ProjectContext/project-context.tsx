import React from "react";
import {
  ContextParagraph,
  ContextSection,
  ContextTitle,
  ParagraphsWrapper,
} from "./project-context.styles";
import { HorizontalLine } from "../styles";
import { useInView } from "react-intersection-observer";
import { fi } from "date-fns/locale";

type ProjectContextProps = {
  sections: {
    title: string;
    paragraphs: string[];
  }[];
};

export const ProjectContext: React.FC<ProjectContextProps> = ({ sections }) => {
  return (
    <>
      {sections.map(({ title, paragraphs }, idx) => {
        
        return (
          <React.Fragment key={"context-section-" + idx}>
            <SingleContextSection title={title} paragraphs={paragraphs} />
          </React.Fragment>
        );
      })}
    </>
  );
};

// todo: normalize the two data models for this
export const SingleContextSection: React.FC<{ title: string, paragraphs: string[], fields?: any }> = ({ title, paragraphs, fields }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const eitherParagraphs = paragraphs || [fields.paragraph1, fields.paragraph2, fields.paragraph3]; 
  return (
    <>
      <div ref={ref}>
        <HorizontalLine inView={inView} />
      </div>
      <ContextSection>
      <ContextTitle>{title || fields.title}</ContextTitle>
      <ParagraphsWrapper>
        {(eitherParagraphs).filter(paragraph => paragraph).map((paragraph, idxx) => (
          <ContextParagraph key={"context-paragraph-" + title + "" + idxx}>
            {paragraph}
          </ContextParagraph>
        ))}
      </ParagraphsWrapper>
    </ContextSection>
  </>
  )
}
