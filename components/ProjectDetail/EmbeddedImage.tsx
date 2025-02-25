import Image from "next/image";
import { mq } from "../../lib/theme";
import styled from "@emotion/styled";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const EmbeddedImage = ({
  src,
  alt,
  priority = false,
  jkItsAVid
}: {
  src: string;
  alt: string;
  priority?: boolean;
  jkItsAVid?: string;
}) => {

  const {ref} = useScrollAnimation();
  const {ref: embeddedImageRef} = useScrollAnimation();

  if (jkItsAVid) {
    return (
      <EmbeddedImageContainer ref={ref}>
        <StyledVideo autoPlay muted playsInline loop>
          <source src={jkItsAVid} type="video/mp4" />
        </StyledVideo>
      </EmbeddedImageContainer>
    );
  }

  return (
    <EmbeddedImageContainer ref={embeddedImageRef}>
      <Image
        src={src}
        fill
        priority={priority}
        alt={alt}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </EmbeddedImageContainer>
  );
};


const EmbeddedImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 70vw;
  ${mq[0]} {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;