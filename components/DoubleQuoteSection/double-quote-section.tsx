import React from "react";
import {
  QuoteSection,
  QuoteText,
  QuoteBlurb,
  QuotesContainer,
  QuoteWrapper,
  QuoteLabel,
  QuoteSectionWrapper,
} from "./double-quote-section.styles";
import { HorizontalLine } from "../styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type DoubleQuoteSectionProps = {
  fields: {
    blurb: string;
    label1: string;
    label2: string;
    quote1: string;
    quote2: string;
  };
};

export const DoubleQuoteSection: React.FC<DoubleQuoteSectionProps> = ({ fields }) => {
  const { ref: animationRef } = useScrollAnimation();
  const { blurb, label1, label2, quote1, quote2 } = fields;

  return (
    <div ref={animationRef}>
    <QuoteSectionWrapper >
      <HorizontalLine />
      <QuoteSection >
        <QuoteBlurb>{blurb}</QuoteBlurb>
        <QuotesContainer>
          <QuoteWrapper>
            <QuoteLabel>{label1}</QuoteLabel>
            <QuoteText>{quote1}</QuoteText>
          </QuoteWrapper>
          <HorizontalLine/>
          <QuoteWrapper>
            <QuoteLabel>{label2}</QuoteLabel>
            <QuoteText>{quote2}</QuoteText>
          </QuoteWrapper>
        </QuotesContainer>
      </QuoteSection>
      <HorizontalLine/>
    </QuoteSectionWrapper>
    </div>
  );
};
