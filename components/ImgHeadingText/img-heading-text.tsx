import { FC, useState, useEffect } from "react";
import { TypeImgHeadingAndText } from "../../contentful/types";
import {
  Container,
  ImageWrapper,
  ContentWrapper,
  Heading,
  TextContent,
  Wrapper,
  BiggerHeading
} from "./img-heading-text.styles";
import { HorizontalLine } from "../styles";
import Image from "next/image";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { getMediaQueryIndex } from "../../lib/theme";

export const ImgHeadingText: FC<TypeImgHeadingAndText> = ({ fields }) => {
  const { image, heading, text, chunkierVariant } = fields;
  const [isMediumUp, setIsMediumUp] = useState(false);
  
  // Add scroll animations
  const imageRef = useScrollAnimation({ translateY: 40 });
  const contentRef = useScrollAnimation({ delay: 200 });

  // Initialize and track the medium breakpoint
  useEffect(() => {
    const updateBreakpoint = () => {
      setIsMediumUp(getMediaQueryIndex(1));
    };
    
    // Set initial value
    updateBreakpoint();
    
    // Update on resize
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return (
    <Wrapper>
      <HorizontalLine/>
      <Container chunkierVariant={chunkierVariant}>
        <ImageWrapper ref={(el) => imageRef.ref(el)}>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition={isMediumUp ? "left" : "center"}
          />
        </ImageWrapper>
        <ContentWrapper ref={(el) => contentRef.ref(el)}>
          {chunkierVariant ? <BiggerHeading>{heading}</BiggerHeading> : <Heading>{heading}</Heading>}
          <TextContent>{text}</TextContent>
        </ContentWrapper>
      </Container >
      <HorizontalLine/>
    </Wrapper>
  );
};
