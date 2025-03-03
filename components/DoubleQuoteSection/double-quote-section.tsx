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
import { useInView } from "react-intersection-observer";
import { HorizontalLine } from "../styles";

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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  }); 
  const { blurb, label1, label2, quote1, quote2 } = fields;

  return (
    <QuoteSectionWrapper>
    <HorizontalLine ref={ref}/>
      <QuoteSection>
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
  );
};
