import { FC } from "react";
import Image from "next/image";
import { TypeImageAndParagraphs } from "../../contentful/types";
import {
  Container,
  ImageContainer,
  ContentContainer,
  Paragraph,
} from "./image-and-paragraph.styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ImageAndParagraph: FC<TypeImageAndParagraphs> = ({ fields }) => {
  const { image, paragraph1, paragraph2 } = fields;
  
  // Add scroll animations
  const imageRef = useScrollAnimation();
  const contentRef = useScrollAnimation({ delay: 200 });

  return (
    <Container>
      {image && (
        <ImageContainer ref={(el) => imageRef.ref(el)}>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition="left top"
          />
        </ImageContainer>
      )}
      <ContentContainer ref={(el) => contentRef.ref(el)}>
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph1 }} />
        {paragraph2 && (
          <Paragraph dangerouslySetInnerHTML={{ __html: paragraph2 }} />
        )}
      </ContentContainer>
    </Container>
  );
};
