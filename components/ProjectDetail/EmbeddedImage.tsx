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
  const props = {
    src,
    height,
    width,
    alt,
    priority,
  };
  return (
    <Image
      {...props}
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};
