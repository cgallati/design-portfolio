import { FC } from "react";
import Image from "next/image";
import { TypeImageAndParagraphs } from "../../contentful/types";
import {
  Container,
  ImageContainer,
  ContentContainer,
  Paragraph,
} from "./image-and-paragraph.styles";

export const ImageAndParagraph: FC<TypeImageAndParagraphs> = ({ fields }) => {
  const { image, paragraph1, paragraph2 } = fields;

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
      <ContentContainer>
        <Paragraph dangerouslySetInnerHTML={{ __html: paragraph1 }} />
        {paragraph2 && (
          <Paragraph dangerouslySetInnerHTML={{ __html: paragraph2 }} />
        )}
      </ContentContainer>
    </Container>
  );
};
