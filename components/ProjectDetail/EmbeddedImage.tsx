import Image from "next/image";
import { tokens } from "../../lib/theme";

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
  );
};
