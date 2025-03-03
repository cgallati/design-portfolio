import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { TypeImageAndCaption } from "../../contentful/types";
import {
  Container,
  ImageContainer,
  Caption,
} from "./image-and-caption.styles";
import { getMediaQueryIndex } from "../../lib/theme";

export const ImageAndCaption: FC<TypeImageAndCaption> = ({ fields }) => {
  const { image, biggerImageAndGreyBg, caption } = fields;
  const [isMediumUp, setIsMediumUp] = useState(false);
  
  useEffect(() => {
    // Initialize on mount
    setIsMediumUp(getMediaQueryIndex(1));
    
    // Listen for resize events
    const handleResize = () => {
      setIsMediumUp(getMediaQueryIndex(1));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container biggerImageAndGreyBg={biggerImageAndGreyBg}>
      {image && (
        <ImageContainer biggerImageAndGreyBg={biggerImageAndGreyBg}>
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition={isMediumUp ? "left center" : "center"}
          />
        </ImageContainer>
      )}
      <Caption biggerImageAndGreyBg={biggerImageAndGreyBg}>{caption}</Caption>
    </Container>
  );
};
