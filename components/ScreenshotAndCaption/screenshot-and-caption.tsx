import { FC } from "react";
import Image from "next/image";
import { TypeScreenshotAndCaption } from "../../contentful/types";
import {
  Container,
  ScreenshotWrapper,
  CaptionWrapper,
  Caption,
} from "./screenshot-and-caption.styles";

export const ScreenshotAndCaption: FC<TypeScreenshotAndCaption> = ({ fields }) => {
  const { screenshot, caption } = fields;

  return (
    <Container>
      <ScreenshotWrapper>
        <Image
          src={"https:" + screenshot.fields.file.url}
          alt={screenshot.fields.description || ""}
          fill
          objectFit="contain"
          objectPosition="left top"
        />
      </ScreenshotWrapper>
      <CaptionWrapper>
        <Caption>{caption}</Caption>
      </CaptionWrapper>
    </Container>
  );
};
