import Image from "next/image";
import { mq, tokens } from "../../lib/theme";
import styled from "@emotion/styled";

export const EmbeddedImage = ({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) => {
  return (
    <EmbeddedImageContainer>
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
