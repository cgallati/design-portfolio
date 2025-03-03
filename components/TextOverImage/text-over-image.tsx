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
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const TextOverImage: FC<TypeTextOverImage> = ({ fields }) => {
  const { text, image } = fields;
  
  // Add scroll animations
  const textRef = useScrollAnimation();
  const imageRef = useScrollAnimation({ delay: 200 });

  return (
    <Container>
      <HorizontalLine/>
      <TextWrapper ref={(el) => textRef.ref(el)}>
        <Text>{text}</Text>
      </TextWrapper>
      <ImageWrapper ref={(el) => imageRef.ref(el)}>
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
