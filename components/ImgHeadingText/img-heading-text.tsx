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

export const ImgHeadingText: FC<TypeImgHeadingAndText> = ({ fields }) => {
  const { image, heading, text, chunkierVariant } = fields;

  return (
    <Wrapper>
      <HorizontalLine/>
      <Container chunkierVarient={chunkierVariant}>
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
          {chunkierVariant ? <BiggerHeading>{heading}</BiggerHeading> : <Heading>{heading}</Heading>}
          <TextContent>{text}</TextContent>
        </ContentWrapper>
      </Container >
      <HorizontalLine/>
    </Wrapper>
  );
};
