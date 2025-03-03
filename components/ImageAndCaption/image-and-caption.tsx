import { FC } from "react";
import Image from "next/image";
import { TypeImageAndCaption } from "../../contentful/types";
import {
  Container,
  ImageContainer,
  Caption,
} from "./image-and-caption.styles";

export const ImageAndCaption: FC<TypeImageAndCaption> = ({ fields }) => {
  const { image, caption } = fields;

  return (
    <Container>
      {image && (
        <ImageContainer>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition="left top"
          />
        </ImageContainer>
      )}
      <Caption>{caption}</Caption>
    </Container>
  );
};
