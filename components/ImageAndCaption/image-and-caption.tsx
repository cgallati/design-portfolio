import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { TypeImageAndCaption } from "../../contentful/types";
import {
  Container,
  ImageContainer,
  Caption,
} from "./image-and-caption.styles";
import { getMediaQueryIndex } from "../../lib/theme";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ImageAndCaption: FC<TypeImageAndCaption> = ({ fields }) => {
  const { image, biggerImageAndGreyBg, caption } = fields;
  const [isMediumUp, setIsMediumUp] = useState(false);
  
  // Add scroll animations
  const imageContainerRef = useScrollAnimation();
  const captionRef = useScrollAnimation({ delay: 200 });
  
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
        <ImageContainer 
          biggerImageAndGreyBg={biggerImageAndGreyBg}
          ref={(el) => imageContainerRef.ref(el)}
        >
          <Image
            src={"https:" + image.fields.file.url}
            alt={image.fields.description || ""}
            fill
            objectFit="contain"
            objectPosition={isMediumUp ? "left center" : "center"}
          />
        </ImageContainer>
      )}
      <Caption 
        biggerImageAndGreyBg={biggerImageAndGreyBg}
        ref={(el) => captionRef.ref(el)}
      >
        {caption}
      </Caption>
    </Container>
  );
};
