import { FC } from "react";
import { SlideFrame, Text } from "./center-stage.styles";
import { useInView } from "react-intersection-observer";

export const CenterStage: FC<{ text: string, fields?: any  }> = ({ text, fields }) => {
  const { ref, inView, entry } = useInView();

  const eitherText = text || fields.text;

  return (
    <SlideFrame>
      <Text ref={ref} inView={inView}>
        {eitherText}
      </Text>
    </SlideFrame>
  );
};
