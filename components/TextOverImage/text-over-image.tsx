import { FC } from "react";
import Image from "next/image";
import { TypeTextOverImage } from "../../contentful/types";
import {
  Container,
  TextWrapper,
  Text,
  ImageWrapper,
} from "./text-over-image.styles";
import { HorizontalLine } from "../styles";

export const TextOverImage: FC<TypeTextOverImage> = ({ fields }) => {
  const { text, image } = fields;

  return (
    <Container>
      <HorizontalLine/>
      <TextWrapper>
        <Text>{text}</Text>
      </TextWrapper>
      <ImageWrapper>
        <Image
          src={"https:" + image.fields.file.url}
          alt={image.fields.description || ""}
          fill
          objectFit="contain"
        />
      </ImageWrapper>
    </Container>
  );
};
