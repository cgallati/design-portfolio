import { FC } from "react";
import Image from "next/image";
import { TypeCenteredImageSection } from "../../contentful/types";
import { ImageContainer, ImageWrapper } from "./centered-image.styles";
import { HorizontalLine } from "../styles";

export const CenteredImage: FC<TypeCenteredImageSection> = ({ fields }) => {
  const { image } = fields;

  return (
    <>
      <ImageContainer>
        <ImageWrapper>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
          />
        </ImageWrapper>
      </ImageContainer>
    </>
  );
};
