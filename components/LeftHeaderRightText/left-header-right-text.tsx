import React from "react";
import {
  ContextParagraph,
  ContextSection,
  ContextTitle,
  ParagraphsWrapper,
  Wrapper,
} from "./left-header-right-text.styles";
import { HorizontalLine } from "../styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const LeftHeaderRightText: React.FC<{ fields: any}> = ({ fields}) => {
    const {header, text} = fields
    const {ref} = useScrollAnimation()
     
    return (
      <Wrapper ref={ref}>
        <HorizontalLine/>
        <ContextSection>
            <ContextTitle>{header}</ContextTitle>
            <ParagraphsWrapper>
                <ContextParagraph>
                {text}
                </ContextParagraph>
        </ParagraphsWrapper>
      </ContextSection>
    </Wrapper>
    )
  }