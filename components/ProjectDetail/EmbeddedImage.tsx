import Image from "next/image";
import { mq, tokens } from "../../lib/theme";
import styled from "@emotion/styled";

export const EmbeddedImage = ({
  src,
  height,
  width,
  alt,
  priority = false,
}: {
  src: string;
  height: number;
  width: number;
  alt: string;
  priority?: boolean;
}) => {
  return (
    // <EmbeddedImageContainer>
    <Image
      src={src}
      height={height}
      width={width}
      priority={priority}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
    // </EmbeddedImageContainer>
  );
};


const EmbeddedImageContainer = styled.div`
  ${mq[0]} {
    width: 100vw;
    height: 100vh;
  }
`;
