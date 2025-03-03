import { FC } from "react";
import Image from "next/image";
import { TypeCenteredImageSection } from "../../contentful/types";
import { ImageContainer, ImageWrapper } from "./centered-image.styles";
import { HorizontalLine } from "../styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const CenteredImage: FC<TypeCenteredImageSection> = ({ fields }) => {
  const { image } = fields;
  
  // Add scroll animation
  const imageRef = useScrollAnimation();

  return (
    <>
      <ImageContainer>
        <ImageWrapper ref={(el) => imageRef.ref(el)}>
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
