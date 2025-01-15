import React from "react";
import {
  ContextParagraph,
  ContextSection,
  ContextTitle,
  ParagraphsWrapper,
} from "./project-context.styles";
import { HorizontalLine } from "../styles";

type ProjectContextProps = {
  sections: {
    title: string;
    paragraphs: string[];
  }[];
};

export const ProjectContext: React.FC<ProjectContextProps> = ({ sections }) => {
  return (
    <>
      {sections.map(({ title, paragraphs }, idx) => (
        <>
          <HorizontalLine />
          <ContextSection key={"context-section-" + idx}>
            <ContextTitle>{title}</ContextTitle>
            <ParagraphsWrapper>
              {paragraphs.filter(paragraph => paragraph).map((paragraph, idxx) => (
                <ContextParagraph key={"context-paragraph-" + idx + "" + idxx}>
                  {paragraph}
                </ContextParagraph>
              ))}
            </ParagraphsWrapper>
          </ContextSection>
        </>
      ))}
    </>
  );
};
