import { FC } from "react";
import { TypeImgHeadingAndText } from "../../contentful/types";
import {
  Container,
  ImageWrapper,
  ContentWrapper,
  Heading,
  TextContent,
  Wrapper
} from "./img-heading-text.styles";
import { SlideFrame } from "../Layout";
import { HorizontalLine } from "../styles";
import Image from "next/image";

export const ImgHeadingText: FC<TypeImgHeadingAndText> = ({ fields }) => {
  const { image, heading, text } = fields;

  return (
    <Wrapper>
      <HorizontalLine/>
      <Container>
        <ImageWrapper>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition="left"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Heading>{heading}</Heading>
          <TextContent>{text}</TextContent>
        </ContentWrapper>
      </Container>
      <HorizontalLine/>
    </Wrapper>
  );
};
