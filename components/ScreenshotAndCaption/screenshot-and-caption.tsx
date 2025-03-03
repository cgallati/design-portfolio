import { FC } from "react";
import Image from "next/image";
import { TypeScreenshotAndCaption } from "../../contentful/types";
import {
  Container,
  ScreenshotWrapper,
  CaptionWrapper,
  Caption,
} from "./screenshot-and-caption.styles";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ScreenshotAndCaption: FC<TypeScreenshotAndCaption> = ({ fields }) => {
  const { screenshot, caption } = fields;
  
  // Add scroll animations
  const screenshotRef = useScrollAnimation();
  const captionRef = useScrollAnimation({ delay: 200 });

  return (
    <Container>
      <ScreenshotWrapper ref={(el) => screenshotRef.ref(el)}>
        <Image
          src={"https:" + screenshot.fields.file.url}
          alt={screenshot.fields.description || ""}
          fill
          objectFit="contain"
          objectPosition="left top"
        />
      </ScreenshotWrapper>
      <CaptionWrapper ref={(el) => captionRef.ref(el)}>
        <Caption>{caption}</Caption>
      </CaptionWrapper>
    </Container>
  );
};
