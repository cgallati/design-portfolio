import { FC } from "react";
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

export const ImgHeadingText: FC<TypeImgHeadingAndText> = ({ fields }) => {
  const { image, heading, text, chunkierVariant } = fields;
  
  // Add scroll animations
  const imageRef = useScrollAnimation({ translateY: 40 });
  const contentRef = useScrollAnimation({ delay: 200 });

  return (
    <Wrapper>
      <HorizontalLine/>
      <Container chunkierVarient={chunkierVariant}>
        <ImageWrapper ref={(el) => imageRef.ref(el)}>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition="left"
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
