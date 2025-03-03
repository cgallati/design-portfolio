import { FC, useEffect, useState } from "react";
import { TypeImageRightTextLeft } from "../../contentful/types";
import {
  Container,
  ImageWrapper,
  ContentWrapper,
  Heading,
  TextContent,
  Wrapper,
} from "./image-right-text-left.styles";
import { HorizontalLine } from "../styles";
import Image from "next/image";
import { getMediaQueryIndex } from "../../lib/theme";

export const ImageRightTextLeft: FC<TypeImageRightTextLeft> = ({ fields }) => {
  const { image, heading, text } = fields;
  const [isMediumUp, setIsMediumUp] = useState(false);
  
  useEffect(() => {
    // Initialize on mount
    setIsMediumUp(getMediaQueryIndex(1));
    
    // Listen for resize events
    const handleResize = () => {
      setIsMediumUp(getMediaQueryIndex(1));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper>
      <HorizontalLine/>
      <Container>
        <ContentWrapper>
          <Heading>{heading}</Heading>
          <TextContent>{text}</TextContent>
        </ContentWrapper>
        <ImageWrapper>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition={isMediumUp ? "right" : "center"}
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};
